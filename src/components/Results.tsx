import React from 'react'

import { IImage } from '../interfaces'

export interface IResultsProps {
  results: IImage[]
}

export const Results: React.FunctionComponent<IResultsProps> = ({
  results
}) => (
  <main className="Results">
    {results.map((image) => (
      <img {...image} />
    ))}
  </main>
)
