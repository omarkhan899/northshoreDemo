"use client";

import { ArrowUpRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { business, services } from "../content";

export function EstimateForm() {
  const search = useSearchParams();
  const selected = services.find(({ id }) => id === search.get("service"))?.id ?? "";
  const [validated, setValidated] = useState(false);

  return (
    <form className="estimate-form" aria-describedby="form-note" onChange={() => setValidated(false)}
      onSubmit={(event) => {
        event.preventDefault();
        setValidated(true);
      }}>
      <p id="form-note" className="form-note">Demo form. To request an estimate, please call <a href={business.phoneLink}>{business.phone}</a>.</p>
      <div className="field-grid">
        <label>Full Name <input name="name" autoComplete="name" required /></label>
        <label>Phone Number <input name="phone" type="tel" autoComplete="tel"
          pattern={String.raw`(?:[+ .\(\)\-]*[0-9]){7,15}[ .\(\)\-]*`}
          title="Enter a phone number with 7 to 15 digits." required /></label>
        <label>Email <input name="email" type="email" autoComplete="email" required /></label>
        <label>Service Needed
          <select key={selected} name="service" required defaultValue={selected}>
            <option value="" disabled>Select a service</option>
            {services.map(({ id, title }) => <option value={id} key={id}>{title}</option>)}
            <option value="other">Other or multiple services</option>
          </select>
        </label>
        <label className="full-field">City / Service Location <input name="city" autoComplete="address-level2" required /></label>
        <label className="full-field">Message <textarea name="message" rows={3} placeholder="Tell us a little about the job." /></label>
      </div>
      <button className="button primary" type="submit">Request My Free Estimate <ArrowUpRight aria-hidden="true" /></button>
      <div role="status">
        {validated && <p className="form-result">Your details passed validation. This demo sends no information. <a href={business.phoneLink}>Call {business.phone} for an estimate.</a></p>}
      </div>
    </form>
  );
}
