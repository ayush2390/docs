/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  vanusDoc: [
    {
      type: "html",
      value: "<h2>Getting Started</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "getting-started/what-is-vanus",
    },
    {
      type: "doc",
      id: "getting-started/vanus-cloud",
    },
    {
      type: "doc",
      id: "getting-started/vanus-open-source",
    },
    {
      type: "doc",
      id: "getting-started/cloud-vs-os",
    },
    {
      type: "category",
      label: "Understand Vanus",
      items: [
        "understand-vanus/architecture",
        "understand-vanus/concepts",
        "understand-vanus/features",
        "understand-vanus/use-cases",
      ],
    },
    {
      type: "html",
      value: "<h2>Vanus Cloud</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "vanus-cloud/what-is-vanus-cloud",
    },
    {
      type: "category",
      label: "User Guides",
      items: [
        {
          type: "category",
          label: "How-to Guides",
          link: {
            type: "doc",
            id: "user-guides/how-to-guides",
          },
          items: [
            "user-guides/how-to-guides/get-webhook-url",
            "user-guides/how-to-guides/add-sections-in-slack-sink",
          ],
        },
        {
          type: "category",
          label: "Template Guides",
          link: {
            type: "doc",
            id: "user-guides/template-guides",
          },
          items: [
            {
              type: "doc",
              id: "user-guides/template-guides/github-starred-feishu",
              label: "GitHub star event triggers a Feishu message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-issue-created-feishu",
              label: "GitHub issue event triggers a Feishu message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-comment-feishu",
              label: "GitHub issue comment event triggers a Feishu message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-open-pr-feishu",
              label:
                "GitHub opened pull-request event triggers a Feishu message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-star-event-slack",
              label: "GitHub star event triggers a Slack message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-issue-event-slack",
              label: "GitHub issue event triggers a Slack message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-comment-slack",
              label: "GitHub comment event triggers a Slack message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-pull-request-opened-slack",
              label: "GitHub open pull request event triggers a Slack message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-comment-discord",
              label: "GitHub issue comment event triggers a Discord message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-open-issue-discord",
              label: "GitHub issue event triggers a Discord message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-open-pr-discord",
              label:
                "GitHub opened pull-request event triggers a Discord message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-star-discord",
              label: "GitHub star event triggers a Discord message",
            },
            {
              type: "doc",
              id: "user-guides/template-guides/github-issue-discord",
              label: "GitHub issue event triggers a Discord message",
            },
          ],
        },
        {
          type: "category",
          label: "Connector Guides",
          items: [
            {
              type: "category",
              label: "Source",
              items: [
                "user-guides/connector-guides/source/auth0/setup",
                "user-guides/connector-guides/source/aws-billing/setup",
                "user-guides/connector-guides/source/aws-eventbridge/setup",
                "user-guides/connector-guides/source/aws-s3/setup",
                "user-guides/connector-guides/source/chatai/setup",
                "user-guides/connector-guides/source/chatgpt/setup",
                "user-guides/connector-guides/source/github/setup",
                "user-guides/connector-guides/source/grafana/setup",
                "user-guides/connector-guides/source/labeling/setup",
                "user-guides/connector-guides/source/schedule/setup",
                "user-guides/connector-guides/source/shopify/setup",
                "user-guides/connector-guides/source/stripe/setup",
                "user-guides/connector-guides/source/webhook/setup",
              ],
            },
            {
              type: "category",
              label: "Sink",
              items: [
                "user-guides/connector-guides/sink/aws-rds-mysql/setup",
                "user-guides/connector-guides/sink/aws-s3/setup",
                "user-guides/connector-guides/sink/dingtalk/setup",
                "user-guides/connector-guides/sink/discord/setup",
                "user-guides/connector-guides/sink/doris/setup",
                "user-guides/connector-guides/sink/elasticsearch/setup",
                "user-guides/connector-guides/sink/feishu/setup",
                "user-guides/connector-guides/sink/google-sheets/setup",
                "user-guides/connector-guides/sink/http/setup",
                "user-guides/connector-guides/sink/mongodb/setup",
                "user-guides/connector-guides/sink/mysql/setup",
                "user-guides/connector-guides/sink/slack/setup",
                "user-guides/connector-guides/sink/snowflake/setup",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "html",
      value: "<h2>Vanus Open Source</h2>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "vanus-open-source/quick-start",
    },
    {
      type: "doc",
      id: "vanus-open-source/installation",
    },
    {
      type: "category",
      label: "How to",
      link: {
        type: "doc",
        id: "how-to",
      },
      items: [
        {
          type: "category",
          label: "Upgrade Vanus",
          items: [
            "how-to/maintain/upgrade/using-vanus-operator",
            "how-to/maintain/upgrade/using-vsctl",
          ],
        },
        {
          type: "category",
          label: "Produce",
          items: [
            "how-to/produce/using-sdk",
            "how-to/produce/send-delay-event",
          ],
        },
        {
          type: "category",
          label: "Consume",
          items: ["how-to/consume/using-sdk"],
        },
        "how-to/manage-eventbus",
        {
          type: "category",
          label: "Manage subscriptions",
          link: {
            type: "doc",
            id: "how-to/manage-subscription",
          },
          items: [
            "how-to/manage-subscription/filters",
            "how-to/manage-subscription/transformer",
            {
              type: "category",
              label: "Function reference",
              link: {
                type: "doc",
                id: "how-to/manage-subscription/function-reference",
              },
              items: [
                "how-to/manage-subscription/function-reference/structure",
                "how-to/manage-subscription/function-reference/string",
                "how-to/manage-subscription/function-reference/date-time",
                "how-to/manage-subscription/function-reference/mathematical",
                "how-to/manage-subscription/function-reference/conditional",
                "how-to/manage-subscription/function-reference/array",
              ],
            },
          ],
        },
        "how-to/manage-dlq",
        "how-to/vsctl",
        "how-to/use-lambda",
        "how-to/use-gcloud-functions",
      ],
    },
    {
      type: "category",
      label: "Connectors",
      link: {
        type: "doc",
        id: "connectors",
      },
      items: [
        {
          type: "category",
          label: "Source",
          link: {
            type: "doc",
            id: "connectors/source",
          },
          items: [
            "connectors/source/source-alicloud-billing/README",
            "connectors/source/source-aws-billing/README",
            "connectors/source/source-aws-s3/README",
            "connectors/source/source-aws-sns/README",
            "connectors/source/source-aws-sqs/README",
            "connectors/source/source-github/README",
            "connectors/source/source-http/README",
            "connectors/source/source-kafka/README",
            "connectors/source/source-mongodb/README",
            "connectors/source/source-mysql/README",
            "connectors/source/source-postgres/README",
            "connectors/source/source-tencentcloud-cos/README",
          ],
        },

        {
          type: "category",
          label: "Sink",
          link: {
            type: "doc",
            id: "connectors/sink",
          },
          items: [
            "connectors/sink/sink-aws-s3/README",
            "connectors/sink/sink-display/README",
            "connectors/sink/sink-doris/README",
            "connectors/sink/sink-elasticsearch/README",
            "connectors/sink/sink-email/README",
            "connectors/sink/sink-feishu/README",
            "connectors/sink/sink-http/README",
            "connectors/sink/sink-k8s/README",
            "connectors/sink/sink-mongodb/README",
            "connectors/sink/sink-mysql/README",
            "connectors/sink/sink-slack/README",
            "connectors/sink/sink-tencentcloud-scf/README",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
