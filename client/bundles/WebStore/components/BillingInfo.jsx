import React from "react";

export const BillingInfo = () => {
  return (
    <>
      <h4 className='mb-3'>Billing address</h4>
      <div className='mb-3'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          className='form-control'
          id='name'
          placeholder=''
          defaultValue=''
          required=''
        />
        <div className='invalid-feedback'>Name is required.</div>
      </div>
      <div className='mb-3'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-control'
          id='email'
          placeholder='you@example.com'
        />
        <div className='invalid-feedback'>
          Please enter a valid email address for shipping updates.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='address'>Address</label>
        <input
          type='text'
          className='form-control'
          id='address'
          placeholder='1234 Main St'
          required=''
        />
        <div className='invalid-feedback'>
          Please enter your shipping address.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='address2'>
          Address 2 <span className='text-muted'>(Optional)</span>
        </label>
        <input
          type='text'
          className='form-control'
          id='address2'
          placeholder='Apartment or suite'
        />
      </div>
      <div className='row'>
        <div className='col-md-5 mb-3'>
          <label htmlFor='country'>Country</label>

          <select
            className='custom-select d-block w-100'
            id='country'
            required=''
            defaultValue='US'
          >
            <option value='AU'>Australia</option>
            <option value='AT'>Austria</option>
            <option value='BE'>Belgium</option>
            <option value='BR'>Brazil</option>
            <option value='CA'>Canada</option>
            <option value='CN'>China</option>
            <option value='DK'>Denmark</option>
            <option value='FI'>Finland</option>
            <option value='FR'>France</option>
            <option value='DE'>Germany</option>
            <option value='HK'>Hong Kong</option>
            <option value='IE'>Ireland</option>
            <option value='IT'>Italy</option>
            <option value='JP'>Japan</option>
            <option value='LU'>Luxembourg</option>
            <option value='MY'>Malaysia</option>
            <option value='MX'>Mexico</option>
            <option value='NL'>Netherlands</option>
            <option value='NZ'>New Zealand</option>
            <option value='NO'>Norway</option>
            <option value='PT'>Portugal</option>
            <option value='SG'>Singapore</option>
            <option value='ES'>Spain</option>
            <option value='SE'>Sweden</option>
            <option value='CH'>Switzerland</option>
            <option value='GB'>United Kingdom</option>
            <option value='US'>United States</option>
          </select>

          <div className='invalid-feedback'>Please select a valid country.</div>
        </div>
        <div className='col-md-4 mb-3'>
          <label htmlFor='state'>State</label>

          <input
            type='text'
            name='state'
            className='form-control'
            id='zip'
            placeholder=''
            required=''
          />

          <div className='invalid-feedback'>Please provide a valid state.</div>
        </div>
        <div className='col-md-3 mb-3'>
          <label htmlFor='zip'>Zip</label>
          <input
            type='text'
            className='form-control'
            id='zip'
            placeholder=''
            required=''
          />
          <div className='invalid-feedback'>Zip code required.</div>
        </div>
      </div>
    </>
  );
};
