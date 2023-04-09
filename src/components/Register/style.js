import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`

export const RegisterImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 50%;
  height: 80vh;
`
export const RegisterImage = styled.img`
  width: 380px;
`

export const RegisterFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const FormHeading = styled.h1`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 500;
  color: #334155;
  margin: 0px;
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const LabelElement = styled.label`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  padding-bottom: 10px;
`
export const InputElement = styled.input`
  height: 40px;
  width: 55%;
  font-family: Roboto;
  font-size: 14px;
  color: #64748b;
  padding-left: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  outline: none;
`
export const SelectOption = styled.select`
  height: 40px;
  width: 55%;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const OptionInput = styled.option`
  font-family: Roboto;
  font-size: 14px;
`
export const Button = styled.button`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px;
  width: 25%;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #ff0b37;
`
