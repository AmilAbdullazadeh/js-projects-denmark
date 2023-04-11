import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { FieldError } from "components/FieldError/FieldError";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ValidatorService } from "services/validator";
import s from "./style.module.css";

const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};


export function NoteForm({ submit, title, note, isEditable }) {
    const [formValues, setFormValues] = useState({title: note?.title, content: note?.content});
    const [formErrors, setFormErrors] = useState({title: '', content: ''});

function updateFormValues(e) {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    validate(name, value);
}

function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
}

function hasError() {
    return Object.values(formErrors).some((err) => err);
}

  const actionIcons = (
    <>
      <div className="col-1">
        {isEditable && (
          <PencilFill
            //          onClick
            className={s.icon}
          />
        )}
      </div>
      <div className="col-1">
        {isEditable && (
          <TrashFill
            //            onClick
            className={s.icon}
          />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        defaultValue={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
        defaultValue={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
        <ButtonPrimary isDisabled={!hasError()} onClick={() => submit({...formValues, created_at: new Date().toLocaleDateString()})}>
            Add
        </ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {titleInput}
      </div>
      <div className="mb-3">
         {contentInput} :
{/*           <pre>content</pre> */}
      </div>
      {submitBtn}
    </div>
  );
}
