import { Button, Col, Modal, Row, Space, notification, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { AccessStatus, CourseLevel, ICourse } from '../../../../../types/course.type';
import { useAddCourseMutation } from '../../course.service';
import { handleFormData, openCreateCourse } from '../../course.slice';
import './CreateCourse.scss';
import CreateLeftSide from './components/CreateLeftSide';
import CreateRightSide from './components/CreateRightSide';

const initStateCourse: ICourse = {
  _id: '',
  name: '',
  description: '',
  price: 0,
  finalPrice: 0,
  access: AccessStatus.FREE,
  level: CourseLevel.BEGINNER,
  thumbnail: '',
  courseSlug: '',
  categoryId: {
    _id: '',
    name: ''
  },
  userId: {
    _id: '',
    name: '',
    avatar: ''
  },
  couponCode: '',
  couponDiscountPercentage: 0 // Initialize coupon discount percentage
};

const orderCreateForm = [
  'course-title',
  'course-slug',
  'course-access',
  'course-price',
  'course-thumb',
  'course-delivery',
  'course-coupon',
  'course-discount' // Add this line for coupon discount percentage input
];

const CreateCourse = () => {
  const isOpen = useSelector((state: RootState) => state.course.isOpenCreateCourse);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const formData = useSelector((state: RootState) => state.course.formData);
  const [addCourse, addCourseResult] = useAddCourseMutation();
  const adminId = useSelector((state: RootState) => state.auth.adminId);
  
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  const handleNextSlide = () => {
    if (currentSlideIdx < orderCreateForm.length - 1) {
      setCurrentSlideIdx((prev) => prev + 1);
    }
  };

  const handleFinished = () => {
    const newCourse: ICourse = {
      ...formData,
      userId: {
        _id: adminId,
        name: 'DEV',
        avatar: ''
      }
    };

    addCourse(newCourse)
      .unwrap()
      .then((result) => {
        console.log(result);

        notification.success({
          message: 'Add Course',
          description: 'Add course successfully!'
        });
        dispatch(handleFormData(initStateCourse));
        dispatch(openCreateCourse(false)); // Close modal after successful submission
      })
      .catch((error) => {
        console.log(error);

        notification.error({
          message: 'Add Course',
          description: 'Add course failed!'
        });
      });
  };

  const handlePrevSlide = () => {
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx((prev) => prev - 1);
    }
  };

  const handleCouponDiscountChange = (value: number | null) => {
    dispatch(handleFormData({ couponDiscountPercentage: value ?? 0 }));
  };

  return (
    <div className="create-course">
      <Modal
        className="create-course__modal"
        centered
        open={open}
        onOk={() => dispatch(openCreateCourse(false))}
        onCancel={() => dispatch(openCreateCourse(false))}
        width={1000}
        bodyStyle={{
          height: '50rem'
        }}
      >
        <Row className="create-course__row">
          <Col className="create-course__col create-course__col--left" md={10}>
            <div className="create-course__left-bar">
              <div className="left-bar">
                <CreateLeftSide dataSlide={orderCreateForm[currentSlideIdx]} />
              </div>
            </div>
          </Col>
          <Col className="create-course__col create-course__col--right" md={14}>
            <div className="create-course__data">
              <form action="" className="create-course__form">
                <div className="create-course__form-wrap">
                  <CreateRightSide dataSlide={orderCreateForm[currentSlideIdx]} />
                  
                  {/* Include coupon discount percentage input field */}
                  {orderCreateForm[currentSlideIdx] === 'course-discount' && (
                    <div className="create-course__discount">
                      <label>Coupon Discount Percentage:</label>
                      <InputNumber
                        value={formData.couponDiscountPercentage}
                        onChange={handleCouponDiscountChange}
                        min={0}
                        max={100}
                        formatter={(value) => `${value}%`}
                        parser={(displayValue) => {
                          if (!displayValue) return 0; // Return 0 if displayValue is undefined or empty string
                          const parsedValue = parseInt(displayValue.replace('%', ''), 10); // Parse the displayValue
                          return isNaN(parsedValue) ? 0 : parsedValue; // Return parsedValue or 0 if parsing fails
                        }}
                      />
                    </div>
                  )}

                  <div className="carousel-navigator ms-8">
                    <Space>
                      <div className="carousel-navigator__prev">
                        <Button onClick={handlePrevSlide}>Previous</Button>
                      </div>
                      <div className="carousel-navigator__dots">
                        <span className="carousel-navigator__dots-item"></span>
                        <span className="carousel-navigator__dots-item"></span>
                        <span className="carousel-navigator__dots-item"></span>
                        <span className="carousel-navigator__dots-item"></span>
                        <span className="carousel-navigator__dots-item"></span>
                      </div>
                      <div className="carousel-navigator__next">
                        <Button onClick={currentSlideIdx === orderCreateForm.length - 1 ? handleFinished : handleNextSlide}>
                          {currentSlideIdx === orderCreateForm.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </Space>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default CreateCourse;
