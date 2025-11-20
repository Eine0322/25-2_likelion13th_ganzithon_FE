import Label from '../Label/Label'
import './DrugList.css'

export function DrugList({ drug_name, avg_total_dose, user_total_dose, level_text }) {
  return (
    <div className='drugList'>
      <h1 className='drugList__title'>
        {drug_name}
        <Label state={level_text} />
      </h1>
      <div className='drugList__text'>
        <div className='drugList__text--avg'>평균 투약량은 {avg_total_dose}입니다</div>
        <div className='drugList__text--user'>{user_total_dose}</div>
      </div>
    </div>
  )
}
