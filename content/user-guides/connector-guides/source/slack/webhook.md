# **How to use the webhook URL of a Slack Source**

## Step 1: Configure Event Subscription
1. Click the **copy icon** to copy the webhook url.
![](images/img_10.png)
2. Go back to **Slack API**.
![](images/img_5.png)
3. Now click on **Event Subscriptions** in the side menu.
![](images/img_6.png)
4. **Enable Events** by turning on the switch.
![](images/img_7.png)
5. Use the URL we've previously **copy and paste** it in **Request URL**. You should see a green `Verified` indicating our Source is verified by Slack.
![](images/img_8.png)

## Step 2: Subscribe to bot events

Generally speaking, Slack Source can subscribe any events you need from Slack.

But, if you're using some **Vanus Templates** like `Send a custom greeting message when new members join the Slack channel`, then you've to subscribe to some specific events.

| Templates                                                              | Events need to subscribe |
|------------------------------------------------------------------------|:------------------------:|
| Send a custom greeting message when new members join the Slack channel | `member_joined_channel`  |

### How to subscribe

1. Scroll down, click **Subscribe to bot events** and after you will be able to click **Add Bot User Event**.
![](images/img_9.png)
2. Select the events you would like to receive, for example you can select `member_joined_channel` to receive events whenever a new member joins your Slack Channel.
![](images/img_17.png)
3. Finally you can **Save Changes** to complete your configuration.
![](images/img_18.png)

## Step 3: Install the Slack App to your Slack workspace

1. Go to **Install Apps** from the side menu and click **Install to Workspace**.
   ![](images/img_13.png)
2. Allow it to be installed into your workspace.
      ![](images/img_14.png)
3. Mention your bot in slack and invite it to the channel.
   ![](images/img_15.png)
