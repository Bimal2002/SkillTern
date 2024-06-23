// // CreateCouponSlide.tsx
// import React from 'react';
// import { Input } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../../../../../store/store';
// import { handleFormData } from '../../../course.slice';
// import { ICourse } from '../../../../../../types/course.type';

// const CreateCouponSlide: React.FC = () => {
//   const dispatch = useDispatch();
//   const couponCode = useSelector((state: RootState) => state.course.formData.couponCode);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch(handleFormData({ couponCode: e.target.value } as Partial<ICourse>));
//   };

//   return (
//     <div className="create-course__coupon">
//       <h3>Coupon Code</h3>
//       <Input
//         value={couponCode}
//         onChange={handleChange}
//         placeholder="Enter coupon code"
//       />
//     </div>
//   );
// };

// export default CreateCouponSlide;


// CreateCouponSlide.tsx
import React from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { handleFormData } from '../../../course.slice';
import { ICourse } from '../../../../../../types/course.type';

const CreateCouponSlide: React.FC = () => {
  const dispatch = useDispatch();
  const couponCode = useSelector((state: RootState) => state.course.formData.couponCode);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleFormData({ couponCode: e.target.value } as Partial<ICourse>));
  };

  return (
    <div className="create-course__coupon">
      <h3>Coupon Code</h3>
      <Input
        value={couponCode}
        onChange={handleChange}
        placeholder="Enter coupon code"
      />
    </div>
  );
};

export default CreateCouponSlide;
