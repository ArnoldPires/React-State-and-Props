import './employeeList.css';
import EmployeeListItem from '../employeeListItem/EmployeeListItem'
import arnold from './Arnold.jpg'
import james from './james.jpg'
import julie from './julie.jpg'
import eugene from './eugene.jpg'
import sarah from './sarah.jpg'
import paul from './paul.jpg'

export default function EmployeeList() {
  return (
    <section className='employeeList'>
      <EmployeeListItem imageSrc={arnold} employeeName='Arnaldo Pires' employeeTitle='President and CEO' />
      <EmployeeListItem imageSrc={james} employeeName='James King' employeeTitle='CFO' />
      <EmployeeListItem imageSrc={julie} employeeName='Julie Taylor' employeeTitle='VP of Marketing' />
      <EmployeeListItem imageSrc={eugene} employeeName='Eugene Lee' employeeTitle='VP of Engineering' />
      <EmployeeListItem imageSrc={sarah} employeeName='Sarah Moffatt' employeeTitle='VP of Sales' />
      <EmployeeListItem imageSrc={paul} employeeName='Paul Jones' employeeTitle='QA Manager' />
    </section>
  )
}