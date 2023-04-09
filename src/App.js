import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import FormDataContext from './context/FormDataContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    formData: null,
  }

  updateFormData = formData => {
    this.setState({formData})
  }

  render() {
    const {formData} = this.state
    return (
      <FormDataContext.Provider
        value={{formData, updateFormData: this.updateFormData}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" to="not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </FormDataContext.Provider>
    )
  }
}

export default App
