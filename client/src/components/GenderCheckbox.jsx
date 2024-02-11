


const GenderCheckbox = ({ selectedGender, onCheckboxChange }) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Male</span>
                <input 
                    id="male" 
                    type="checkbox" 
                    checked={selectedGender === 'male'} 
                    onChange={() => onCheckboxChange("male")} 
                    className={`checkbox border-blue-600 checked:border-slate-900 [--chkbg:theme(colors.gray.900)] [--chkfg:theme(colors.blue.600)] ${selectedGender === 'male' ? 'selected' : ""}`} 
                />
            </label>
        </div>
        
        <div className="form-control">
            <label htmlFor="female" className={`label gap-2 cursor-pointer`}>
                <span className="label-text">Female</span>
                <input id="female" type="checkbox" checked={selectedGender === 'female'} onChange={() => onCheckboxChange('female')} className={`checkbox border-blue-600 checked:border-slate-900 [--chkbg:theme(colors.gray.900)] [--chkfg:theme(colors.blue.600)] ${selectedGender === 'female' ? 'selected' : ""}`} />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox