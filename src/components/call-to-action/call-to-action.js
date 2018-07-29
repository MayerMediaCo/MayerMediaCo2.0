import React from 'react'
import EmailCaptureForm from '../email-capture-form/email-capture-form'

const CallToAction = () => (
  <div id='call-to-action'>
    <div className="container">
      <div className="columns">
        <div className="column">
          <h3>Want Actionable Tips to Improve Your Online Presence?</h3>
        </div>
        <div className="column">
          <EmailCaptureForm/>
        </div>
      </div>
    </div>
  </div>
)

export default CallToAction