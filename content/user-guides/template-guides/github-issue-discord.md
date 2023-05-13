# GitHub issue event triggers a Discord message

GitHub is the largest web-based platform that provides developers with a place to host and manage their software projects.

You can receive notifications when specific events occur in a repository by adding a GitHub Source on Vanus Cloud.

This guide will help you get a Discord notification whenever someone creates a new issue in your repository.

<iframe width="800" height="450" src="https://www.youtube.com/watch?v=CSelNeVjdlM" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source - Authorize GitHub and select a GitHub repo

- Log in to [Vanus Cloud](https://cloud.vanus.ai/) and choose the "**GitHub star event triggers a** **Feishu** **message**" template.
- Find the "**Sign in with GitHub**" button and authorize GitHub. Then, select the repo you want to configure.

Img1

### Step 2: Configure Sink - Get the Discord Webhook URL

- Go to Discord Server, and open it Server Settings

- Go to Integrations and click on New Webhook

- A new webhook will be generated, click on Copy Webhook URL

Img2

### Step 3: Configure Sink Configuration 

- Go back to Vanus Cloud website, and scroll down to Sink Configuration

- Paste the copied URL in the Webhook URL section and click submit

- Your connection has been succesfully created

Img 4

## Result Display

- When someone creates a new issue in your open-source GitHub repo, you will receive a real-time GitHub Issue Notification in Discord. 

Img3

