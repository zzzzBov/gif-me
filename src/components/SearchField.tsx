import React from 'react'

export interface ISearchFieldProps {
  label: string
  name: string
  onChange(value: string): void
  value: string
}

export const SearchField: React.FunctionComponent<ISearchFieldProps> = ({
  label,
  name,
  onChange,
  value
}) => (
  <label className='SearchField'>
    <span className='SearchField_label'>{label}</span>
    <input
      autoFocus={true}
      className='SearchField_input'
      name={name}
      onChange={(e) => onChange(e.currentTarget.value)}
      type='search'
      value={value} />
  </label>
)
