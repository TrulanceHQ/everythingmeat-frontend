import React from 'react'
import BackToDashboard from '../components/BackToDashboard';
import DefaultLeft from '../components/DefaultLeft';

type Props = {
    onClick: () => void;
    handleSectionClick: (componentName: string) => void
}

const TotalSellers = ({onClick, handleSectionClick}: Props) => {
  return (
    <div> <BackToDashboard onClick={onClick}/>
    <DefaultLeft onSectionClick={handleSectionClick} activeComponent="totalSellers"/>
    TotalSellers</div>

  )
}

export default TotalSellers