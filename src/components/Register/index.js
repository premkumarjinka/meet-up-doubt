import {Component} from 'react'
import Header from '../Header'
import FormDataContext from '../../context/FormDataContext'
import {
  RegisterContainer,
  ResponsiveContainer,
  RegisterImageContainer,
  RegisterImage,
  RegisterFormContainer,
  Form,
  FormHeading,
  InputContainer,
  LabelElement,
  InputElement,
  SelectOption,
  OptionInput,
  Button,
  ErrorMsg,
} from './style'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    name: '',
    topic: '',
    submitted: false,
    showSubmitError: false,
    errorMsg: '',
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  renderNameField = () => {
    const {name} = this.state
    return (
      <>
        <LabelElement htmlFor="name">NAME</LabelElement>
        <InputElement
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          placeholder="Your name"
        />
      </>
    )
  }

  handleOptionChange = event => {
    this.setState({topic: event.target.value})
  }

  renderTopicsField = () => {
    const {option} = this.state

    return (
      <>
        <LabelElement htmlFor="topic">TOPICS</LabelElement>
        <SelectOption
          id="topic"
          name="topic"
          value={option}
          onChange={this.handleOptionChange}
        >
          {topicsList.map(eachTopic => {
            const {id, displayText} = eachTopic
            return (
              <OptionInput key={id} value={id}>
                {displayText}
              </OptionInput>
            )
          })}
        </SelectOption>
      </>
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    const {name, topic} = this.state
    if (name === '') {
      this.setState({errorMsg: 'Please enter your name', showSubmitError: true})
    } else {
      this.setState({submitted: true}, () => {
        const {updateFormData} = this.context
        updateFormData({name, topic})
      })
    }
  }

  render() {
    const {errorMsg, showSubmitError, submitted} = this.state

    if (submitted) {
      const {history} = this.props
      history.replace('/')
    }

    return (
      <>
        <Header />
        <RegisterContainer>
          <ResponsiveContainer>
            <RegisterImageContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </RegisterImageContainer>
            <RegisterFormContainer>
              <Form onSubmit={this.handleSubmit}>
                <FormHeading>Let us Join</FormHeading>
                <InputContainer>{this.renderNameField()}</InputContainer>
                <InputContainer>{this.renderTopicsField()}</InputContainer>
                <Button type="submit">Register Now</Button>
                {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </Form>
            </RegisterFormContainer>
          </ResponsiveContainer>
        </RegisterContainer>
      </>
    )
  }
}

Register.contextType = FormDataContext

export default Register
