import React from 'react';

export interface IResultProps {
  alt: string
  height: string
  id: string
  onClick(): void
  src: string
  width: string
}

export const Result: React.FunctionComponent<IResultProps> = ({
  onClick,
  ...imgProps
}) => (
  <button type='button' className='Result' onClick={onClick}>
    <img className='Result_image' alt="" {...imgProps} />
  </button>
)
