import FAQItem from './FAQItem';

const FAQ=()=>{

return(
    <>
 <FAQItem
  question='What is the purpose of this application?'
  answer='The application helps determine an efficient way to arrange goods inside a vehicle based on their dimensions,
   weight, and delivery requirements. Its goal is to maximize 
  available space and load capacity while reducing wasted space and unnecessary transportation costs.'
 />


 <FAQItem
  question='What vehicle measurements are required?'
  answer="You need to provide the vehicle's overall length, width, height, and maximum load capacity. These measurements define the available loading space and weight limit."
 
 />

  <FAQItem
  question='Can I use the system for different types of vehicles?'
  answer='Yes. By entering the appropriate dimensions and maximum capacity, the system can be adapted to different vehicle configurations.'
 
 />

  <FAQItem
  question='What are the benefits of optimizing the loading process?'
  answer='Optimized loading can reduce unused space, improve vehicle capacity utilization, decrease the number of trips required, and potentially lower transportation and operational costs.'
 
 />

 </>
);

};
export default FAQ;