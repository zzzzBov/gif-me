import React from 'react'

export interface IResultsProps {
  results: string[]
}

export const Results: React.FunctionComponent<IResultsProps> = ({
  results
}) => (
  <main className="Results">
    {results.map(result => (
      <img src={result} />
    ))}
  </main>
)
