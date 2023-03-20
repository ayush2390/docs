---
title: Get GitHub Star Notifications on Slack
authors: Ayush Thakur
tags: ['GitHub', 'Webhook', 'Slack']
---

# Get GitHub Star Notifications on Slack

Getting stars on your GitHub repositories feels like an achievement in itself. It shows that people are liked your repository and using your repository in their projects. More the stars on your repositories, more the people have appreciated your work in that repository. Sometime, the repositories in the profile also get ranked depending upon the stars the repositories.

In majority of the scenarios, it becomes quite a hectic task to keep record whenever a user stars any of your repository. Even if you attach any type of email notification to it, then getting a whole email whenever your repository gets starred could become very irritating.

[Vanus services](vanus.ai) are a potential solution to this problem. [Vanus Cloud](https://cloud.vanus.ai/) services offers a GitHub to Slack template that could be used to create a connection between the GitHub and Slack. With the help of this template, every time a user will star your repository, you will instantly get a fully customized message on your Slack channel.

The whole process of setting up this connection is extremely easy to execute. It literally takes just 1-2 mins of setup the connection and then you are good to go. Let’s now take a look at the setup process. 

**Setup Process**

Step 1: Configure the Source – Authorize GitHub and select the desired repository

Step 2: Configure the Sink – Obtain a Slack webhook address

Step 3: Configure the Subscription – Create a connection using the template

Let’s understand each steep in detail with example

Step 1: Configure the Source

•	Go to Vanus Cloud through the browser, and login with the desired credentials

•	In the dashboard section, select the **“GitHub Star event triggers a Slack message”**

[img](img)

•	Now, fill the desired name, the sign in with GitHub and finally select the desired repository

[img](img)

Step 2 – Configure the Sink

•	Now you have to configure the URL in Sink Configuration section

[img](img)

•	For that, you will have to use the Slack API and create a webhook for it
•	Go to Slack API from the browser and go to “Create an app”

[img](img)

•	Choose the “From Scratch”, add the “App Name” and Select the desired workspace and Click on Create App

[img](img)

[img](img)

•	Now, you have to create a webhook. For that, go to Incoming Webhooks, Turn on the Activate Incoming Webhooks, and then go to “Add New Webhook to Workspace”

[img](img)

•	Select the Slack Channel where you want to receive the messages, and then Click on Allow

[img](img)

•	After clicking on Allow, You will get the Webhook URL. Copy that URL and paste it in the Sink Configuration URL and finally Click on Next

[img](img)

[img](img)

Step 3 – Configure the Subscription

•	In this setup, you do not need to do any configurations and keep everything at default and click on Submit

[img](img)

Now the setup is complete. You can see the created connection in the Connection panel. Make sure the status is showing running in your connection. If it is not showing running, the reload the page and it will start showing running.

[img](img)

**Result**

Now if the any user come to your GitHub profile and stars that specific repository which you have submitted while setting up the process, the you will instantly get the notification message on that Slack channel which you have submitted.

[img](img)

And as you can see, its not just a simple notification message. The message also shows which user have starred your repository, which repository the user has starred, and the total number of stars your repository has. 

Creating a connection like this can make much easier for the owner of the repository to have a record of his repository without going to its repository again and again. This service of [Vanus Cloud](https://cloud.vanus.ai/dashboard) could save a lot of time of the developer and encourage the developers to contribute more in open source community. 
