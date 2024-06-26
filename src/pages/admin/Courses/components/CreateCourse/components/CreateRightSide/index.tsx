import CourseAccess from './CourseAccess';
import CourseDelivery from './CourseDelivery';
import CoursePrice from './CoursePrice';
import CourseSlug from './CourseSlug';
import CourseThumb from './CourseThumb';
import CourseTitle from './CourseTitle';
import './CreateRightSide.scss';
import CourseCoupon from './CourseCoupn';

type Props = {
  dataSlide: string;
};

const CreateRightSide = ({ dataSlide }: Props) => {
  return (
    <div className='create-right-side'>
      {dataSlide === 'course-title' && <CourseTitle />}
      {dataSlide === 'course-slug' && <CourseSlug />}
      {dataSlide === 'course-price' && <CoursePrice />}
      {dataSlide === 'course-access' && <CourseAccess />}
      {dataSlide === 'course-thumb' && <CourseThumb />}
      {dataSlide === 'course-delivery' && <CourseDelivery />}
      {dataSlide === 'course-coupon' && <CourseCoupon />} {/* Add this line */}
    </div>
  );
};

export default CreateRightSide;
