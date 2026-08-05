import { useRef, useState } from "react";

import { PageHero } from "../components/primitives";
import { contactPage } from "../content/site";

type FieldKey = "name" | "email" | "message";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_MESSAGES: Record<FieldKey, string> = {
  name: "请填写您的称呼",
  email: "请填写有效的邮箱地址，例如 name@company.com",
  message: "请简要描述您的项目或需求",
};

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<FieldKey, string>>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const statusRef = useRef<HTMLParagraphElement | null>(null);

  const setError = (field: FieldKey, message: string) => {
    setErrors((current) => ({ ...current, [field]: message }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const values: Record<FieldKey, string> = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    let firstInvalid: FieldKey | null = null;
    for (const field of ["name", "email", "message"] as FieldKey[]) {
      const valid = field === "email" ? EMAIL_PATTERN.test(values[field]) : values[field].length > 0;
      setError(field, valid ? "" : REQUIRED_MESSAGES[field]);
      if (!valid && firstInvalid === null) firstInvalid = field;
    }

    if (firstInvalid !== null) {
      const targetField: FieldKey = firstInvalid;
      setSubmitted(false);
      (form.elements.namedItem(targetField) as HTMLElement).focus();
      return;
    }

    form.reset();
    setSubmitted(true);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const handleInput = (field: FieldKey) => {
    if (errors[field]) setError(field, "");
  };

  const infoFacts = contactPage.infoFacts;

  return (
    <>
      <PageHero
        crumbs={[{ label: "首页", href: "/" }, { label: "联系我们" }]}
        title={contactPage.title}
        lead={contactPage.lead}
      />

      <section className="section band" data-od-id="contact">
        <div className="container contact-grid reveal">
          <div className="contact-info">
            <h2>{contactPage.infoHeading}</h2>
            <dl className="fact-list" style={{ marginTop: "var(--space-6)" }}>
              {infoFacts.map((fact) => (
                <div className="fact" key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>
                    {fact.term === "邮箱" ? (
                      <a className="link-arrow" style={{ fontWeight: 400 }} href={`mailto:${fact.detail}`}>
                        {fact.detail}
                      </a>
                    ) : (
                      fact.detail
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <form className="card form-card" id="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <h2>{contactPage.formHeading}</h2>
            <div className="field">
              <label htmlFor="name">
                称呼{" "}
                <span className="req" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="例如：王老师 / 李经理…"
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby="name-error"
                onInput={() => handleInput("name")}
              />
              <p className="field-error" id="name-error" role="alert">
                {errors.name}
              </p>
            </div>
            <div className="field">
              <label htmlFor="email">
                邮箱{" "}
                <span className="req" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                spellCheck="false"
                placeholder="name@company.com"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
                onInput={() => handleInput("email")}
              />
              <p className="field-error" id="email-error" role="alert">
                {errors.email}
              </p>
            </div>
            <div className="field">
              <label htmlFor="org">单位 / 组织</label>
              <input
                type="text"
                id="org"
                name="org"
                autoComplete="organization"
                placeholder="学校、政府部门、企业或文旅项目…"
              />
              <p className="field-help">选填，便于我们安排对应业务团队。</p>
            </div>
            <div className="field">
              <label htmlFor="topic">合作方向</label>
              <select id="topic" name="topic" defaultValue="edu">
                {contactPage.topics.map((topic) => (
                  <option key={topic.value} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">
                需求描述{" "}
                <span className="req" aria-hidden="true">
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="简要描述您的场景、目标或当前遇到的问题…"
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby="message-error"
                onInput={() => handleInput("message")}
              />
              <p className="field-error" id="message-error" role="alert">
                {errors.message}
              </p>
            </div>
            <button className="btn btn-primary" type="submit">
              {contactPage.submitLabel}
            </button>
            <p
              className={`form-status${submitted ? " is-shown" : ""}`}
              id="form-status"
              role="status"
              tabIndex={-1}
              ref={statusRef}
            >
              {contactPage.successMessage}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
