import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField( field ) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input className='form-control'
          type="text"
          {...field.input}
        />
      {field.meta.error}
      </div>      
    );
  }
  
  onSubmit( values ){
    console.log(values);
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          name='title' 
          component={this.renderField}
          label='Title'
        />
        <Field 
          name='categories' 
          component={this.renderField}
          label='Categories'
        />
        <Field 
          name='content' 
          component={this.renderField}
          label='Post Content'
        />
      <button type="submit" className="btn btn-primary">Save</button> <button>Cancel</button>
      </form>
    );
  }
}

function validate( values ){
  const errors = {};
  
  if( !values.title || values.title.length < 3){
    errors.title = "Enter a title that is at least 3 characters!"
  }
  
  if( !values.categories ){
    errors.categories = "Enter some categories!"
  }
  
  if( !values.content ){
    errors.content = "Enter some content!"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})( PostsNew );