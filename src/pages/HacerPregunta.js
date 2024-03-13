import React from 'react'


export default function HacerPregunta() {
  return (
    <div class="container p-2 mt-5 col-sm-5 col-md-8">

<div class="mb-3">
  <input type="text" class="form-control" id="validationCustom01" placeholder="Titulo de articulo"/>
</div>
<div class="mb-3">
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
       

    </div>
  )
}
