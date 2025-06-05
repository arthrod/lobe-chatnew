'use client';

import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AdminPage() {
  const { t } = useTranslation('admin');
  const [userId, setUserId] = useState('');
  const [preference, setPreference] = useState('{}');

  const save = async () => {
    try {
      await fetch('/api/admin/users', {
        body: JSON.stringify({ preference: JSON.parse(preference), userId }),
        headers: {
          'Content-Type': 'application/json',
          'x-admin-auth': process.env.NEXT_PUBLIC_ADMIN_SECRET || '',
        },
        method: 'POST',
      });
      alert('saved');
    } catch {
      alert('error');
    }
  };

  return (
    <Form layout="vertical">
      <Form.Item label={t('userId')}>
        <Input onChange={(e) => setUserId(e.target.value)} value={userId} />
      </Form.Item>
      <Form.Item label={t('preference')}>
        <Input.TextArea onChange={(e) => setPreference(e.target.value)} value={preference} />
      </Form.Item>
      <Button onClick={save} type="primary">
        {t('save')}
      </Button>
    </Form>
  );
}
