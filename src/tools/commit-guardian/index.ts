import { BuiltinToolManifest } from '@/types/tool';

import { systemPrompt } from './systemRole';

export const CommitGuardianApiName = {
  reviewDiff: 'reviewDiff',
};

export const CommitGuardianManifest: BuiltinToolManifest = {
  api: [
    {
      description:
        'Review a git diff and generate tips for improvement. Detect secrets and warn about them.',
      name: CommitGuardianApiName.reviewDiff,
      parameters: {
        type: 'object',
        properties: {
          diff: { description: 'Git diff content', type: 'string' },
          brHuehue: {
            description: 'If true, respond in Brazilian Portuguese',
            type: 'boolean',
            default: false,
          },
        },
        required: ['diff'],
      },
    },
  ],
  identifier: 'commit-guardian',
  meta: {
    avatar: '🛡️',
    title: 'Commit Guardian',
  },
  systemRole: systemPrompt,
  type: 'builtin',
};
