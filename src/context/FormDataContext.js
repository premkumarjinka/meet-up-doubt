import React from 'react'

const FormDataContext = React.createContext({
  name: '',
  topic: '',
  updateFormData: () => {},
})

export default FormDataContext
