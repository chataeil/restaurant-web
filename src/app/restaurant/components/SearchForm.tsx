import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/StyledType'

const StyledFrom = styled.form<CommonType>``

const SearchForm = ({ form, onChange, onSubmit }) => {
  return <StyledFrom onSubmit={onSubmit}></StyledFrom>
}

export default React.memo(SearchForm)
