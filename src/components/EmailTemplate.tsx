import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New message from your portfolio contact form</h1>
    <p>
      From: <strong>{name}</strong>
    </p>
    <p>
      Email: <a href={`mailto:${email}`}>{email}</a>
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
); 