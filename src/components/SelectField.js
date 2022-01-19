
const SelectField = (props) => {
  const { handleChange, label, name, value } = props;
  return (
    <div>
      <label className="text-gray-50 text-sm" htmlFor={name}>{label}</label>
      <textarea onChange={handleChange} name={name} rows="1" className="w-full border-b-2 outline-none bg-gray-100 p-2" value={value}></textarea>
    </div>
  )
}

export default SelectField
