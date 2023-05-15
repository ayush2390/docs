# Send a custom greeting message when new members join the Slack channel

Slack is the one of the largest platform that provides developers and businesses to communicate with each other and collabratively work on projects

You can send a custom greeting message to every new user who joins your Slack Community

This guide will help you send custom greeting messages to every new Slack Community member.

<iframe width="800" height="450" src="https://youtu.be/DnO5ChQ44UA" title="YouTube video player" frameBorder="0" allowFullScreen={true} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

## Get Started

### Step 1: Configure the Source

- Log in to [Vanus Cloud](https://cloud.vanus.ai/) and choose the **Send a custom greeting message when new members join the Slack channel** template

- Now go to Slack API, create a new app and add a new Webhook in that app

- Select the time interval in Scheduule Type and set the time in Time of the Day

If you do not know how to create Webhook using Slack API, read this blog https://www.vanus.ai/blog/get-your-slack-webhook-url/

- Open the "Basic Information" of app and paste the "Verification Token" and "Signing Secret" from there to Source setup in Vanus Cloud and click Next

![1.png](./imgs/slack-greeting-message-1.png)

### Step 2: Configure Sink - Get the Slack Webhook URL

- Copy the newly created Webhook URL and paste it in the Webhook Url of Sink Configuration

- Click Submit and your connection has been succesfully setup
  ![2.png](./imgs/slack-greeting-message-2.png)

### Step 3: Configure Event Subscription

- Open the newly created connnection and copy the Webhook URL

- Now go back to the created app in Slack API and open the "Event Subscription"

- Turn on the "Enable Events" and paste the copied URL in the "Request URL section"

- Now go to "Subscribe to bot events" and click on "Add Bot User Event"

- Select the "member_joined_channel" from scroll down option and click on "Save Changes"

- You wil recieve a popup to Reinstall your app, click on it, select thhe Slack Workspace and click Allow

- Event Subscritpion has been successfully configured

  ![3.png](./imgs/slack-greeting-message-3.png)

### Step 4: Add the app to Slack Workspace

- Now open the Slack Channel, tag the app in the chat and hit enter

- You will receieve a popuup, click on "Add to channel"

- The setup has been sucesffuly done

  ![4.png](./imgs/slack-greeting-message-4.png)

  ![5.png](./imgs/slack-greeting-message-5.png)

Now everytime a user will join youur Slack Community, he will get a customized greeting message

You can totally cutomize this greeting message in the Sink Configruation part

![6.png](./imgs/slack-greeting-message-6.png)

If you doo not know how to create Webhook using Slack API, read this blog https://www.vanus.ai/blog/get-your-slack-webhook-url/

### Result Display

- When a schedule message will be sent to Slack Community, this is how it will look.

![6.png](./imgs/github-issue-discord-6.png)
