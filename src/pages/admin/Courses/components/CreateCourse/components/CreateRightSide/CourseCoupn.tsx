// CourseCoupon.tsx
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../store/store';
import { handleFormData } from '../../../../course.slice';

const CourseCoupon = () => {
  const dispatch = useDispatch();
  const couponCode = useSelector((state: RootState) => state.course.formData.couponCode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleFormData({ couponCode: e.target.value }));
  };

  return (
    <div className="course-coupon">
      <h3>Coupon Code</h3>
      <Input
        value={couponCode}
        onChange={handleChange}
        placeholder="Enter coupon code"
      />
    </div>
  );
};

export default CourseCoupon;
