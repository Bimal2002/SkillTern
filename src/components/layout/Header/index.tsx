import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Avatar, Dropdown, Menu, Input, Modal, Space, Drawer } from 'antd';
import { BellOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useLogoutMutation } from '../../../pages/auth.service';
import { closeAuthModal, openAuthModal, setUnauthenticated } from '../../../pages/auth.slice';
import Login from '../../../pages/site/Auth/Login';
import Signup from '../../../pages/site/Auth/Signup';
import { useGetUserQuery } from '../../../pages/site/client.service';
import { setSearchQuery } from '../../../pages/site/client.slice';
import { RootState } from '../../../store/store';
import { IUser } from '../../../types/user.type';
import Button from '../../Button';
import CategoriesNav from './components/CategoriesNav';
import skillternLogo from './Skilltern.png';
import './index.css';
import './Header.scss';
const { Search } = Input;

const Header = () => {
  const [showCategoriesNav, setShowCategoriesNav] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const isOpenAuthModal = useSelector((state: RootState) => state.auth.isOpenAuthModal);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [authState, setAuthState] = useState('login');
  const cart = useSelector((state: RootState) => state.client.cart);
  const userId = useSelector((state: RootState) => state.auth.userId);
  const [userData, setUserData] = useState<IUser>();
  const { data } = useGetUserQuery(userId, { skip: !userId });
  const [logout] = useLogoutMutation();

  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPath = location.pathname;

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(closeAuthModal());
  };

  const handleCancel = () => {
    dispatch(closeAuthModal());
  };

  const signInHandler = () => {
    setAuthState('login');
    dispatch(openAuthModal());
  };

  const signUpHandler = () => {
    setAuthState('signup');
    dispatch(openAuthModal());
  };

  const changeAuthState = (authState: string) => {
    setAuthState(authState);
  };

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === 'logout') {
      logout()
        .unwrap()
        .then((result) => {
          notification.success({ message: result.message });
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      dispatch(setUnauthenticated());
    }
  };

  const userAuthItems = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">
        <Link to="/profile">
          <div>{userData?.name}</div>
          <div>{userData?.email}</div>
        </Link>
      </Menu.Item>
      <Menu.Item key="mylearning">
        <Link to="/start">My Learning</Link>
      </Menu.Item>
      <Menu.Item key="instructor">Instructor Dashboard</Menu.Item>
      <Menu.Item key="notifications">Notifications</Menu.Item>
      <Menu.Item key="messages">Messages</Menu.Item>
      <Menu.Item key="account-settings">Account Settings</Menu.Item>
      <Menu.Item key="payment-method">Payment method</Menu.Item>
      <Menu.Item key="purchase-history">Purchase history</Menu.Item>
      <Menu.Item key="public-profile">Public Profile</Menu.Item>
      <Menu.Item key="edit-profile">Edit Profile</Menu.Item>
      <Menu.Item key="help">Help</Menu.Item>
      <Menu.Item key="logout" danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  const notificationItems = (
    <Menu>
      <Menu.Item key="1">Note 1</Menu.Item>
      <Menu.Item key="2">Note 2</Menu.Item>
      <Menu.Item key="3" danger>Note 3</Menu.Item>
      <Menu.Item key="4" danger>Note 4</Menu.Item>
    </Menu>
  );

  const wishlistItems = (
    <Menu>
      <Menu.Item key="1">Wishlist 1</Menu.Item>
      <Menu.Item key="2">Wishlist 2</Menu.Item>
      <Menu.Item key="3" danger>Wishlist 3</Menu.Item>
      <Menu.Item key="4" danger>Wishlist 4</Menu.Item>
    </Menu>
  );

  const onSearch = (value: string) => {
    dispatch(setSearchQuery(value));
    setSearchParams({ _q: value });
    navigate(`courses?_q=${value}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowCategoriesNav(false);
      } else {
        setShowCategoriesNav(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const showMobileMenuHandler = () => {
    setOpenMobileMenu(true);
  };

  return (
    <div className='bg-black  text-white '>
      {/* <div className='flex items-center justify-between '> */}
      <div className='flex items-center justify-between m-0 mt-[4px] p-3'>
       
       <div className='hidden lg:flex items-center space-x-4'>
          <Link to='/'>
            <img src={skillternLogo} alt='Logo' className='w-60 h-auto' />
          </Link>
          <Search
            style={{ width: '30rem' }}
            placeholder='Search to find your suitable courses'
            onSearch={onSearch}
            enterButton
          />
        </div>

        <div className='flex items-center'>
          <ul className='flex items-center space-x-6'>
            {isAuth && (
              <li>
                <Link to='/start' className='hover:text-gray-400'>
                  My Learning
                </Link>
              </li>
            )}
            <li>
              <Link to='/' className='hover:text-gray-400'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/courses' className='hover:text-gray-400'>
                Courses
              </Link>
            </li>
            <li >
              <Link to='/contact' className='hover:text-gray-400'>
                Contact
              </Link>
            </li>
            <li >
              <Link to='/about-us' className='hover:text-gray-400'>
                About Us
              </Link>
            </li>
            {isAuth && userData && (
              <>
                <Dropdown overlay={wishlistItems} placement='bottomRight'>
                  <Badge dot={true}>
                    <HeartOutlined className='text-xl cursor-pointer text-white p-2 scale-150' />
                  </Badge>
                </Dropdown>
                <Dropdown overlay={notificationItems} placement='bottomRight'>
                  <Badge dot={true}>
                    <BellOutlined className='text-xl cursor-pointer text-white p-2 scale-150' />
                  </Badge>
                </Dropdown>
                <Dropdown overlay={userAuthItems} placement='bottomRight'>
                  <Badge dot={true}>
                    <Avatar src={userData?.avatar} />
                  </Badge>
                </Dropdown>
              </>
            )}
          </ul>
          {/* <div className='ml-6'>
            <Link to='/view-cart' className='hover:text-gray-400'>
              <Badge count={cart?.items?.length || 0}>
                <ShoppingCartOutlined className='text-xl' />
              </Badge>
            </Link>
          </div> */}
          {!isAuth && (
            <div className='ml-6'>
              <Space>
                <Button onClick={signInHandler} className='btn btn-sm btn-outline-primary'>
                  Sign in
                </Button>
                <Button onClick={signUpHandler} className='btn btn-sm btn-outline-primary'>
                  Sign up
                </Button>
              </Space>
            </div>
          )}
        </div>
      </div>
      {currentPath === '/' && showCategoriesNav && <CategoriesNav />}
      <Modal title='' visible={isOpenAuthModal} onOk={handleOk} onCancel={handleCancel}>
        {authState === 'login' && <Login onClick={changeAuthState} />}
        {authState === 'signup' && <Signup onClick={changeAuthState} />}
      </Modal>
      <Drawer
        title='Mobile menu'
        placement='left'
        width={300}
        onClose={onCloseMobileMenu}
        visible={openMobileMenu}
        className='text-white'
      >
        <div className='flex flex-col items-center'>
          <Link to='/' className='my-4 hover:text-gray-400'>
            Home
          </Link>
          <Link to='/courses' className='my-4 hover:text-gray-400'>
            Courses
          </Link>
          <Link to='/contact' className='my-4 hover:text-gray-400 '>
            Contact
          </Link>
          <Link to='/about-us' className='my-4 hover:text-gray-400 '>
            About
          </Link>
          {isAuth && (
            <>
              <Link to='/start' className='my-4 hover:text-gray-400'>
                My Learning
              </Link>
              <Link to='/view-cart' className='my-4 hover:text-gray-400'>
                View Cart
              </Link>
            </>
          )}
          {!isAuth && (
            <>
              <Button onClick={signInHandler} className='btn btn-sm btn-outline-primary my-4'>
                Sign in
              </Button>
              <Button onClick={signUpHandler} className='btn btn-sm btn-outline-primary my-4'>
                Sign up
              </Button>
            </>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;

