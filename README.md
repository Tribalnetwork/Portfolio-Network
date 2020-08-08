# Tribal Network - React Web App

A [Tribal Studio](https://www.tribaliii.com/) app for filmmakers. Deployed [here](https://www.tribalnetwork.org/).

## What is this repo?

This repo serves as the entire Tribal Network web app codebase.

If you're looking for the repo for the web app, head on over to the [mobile repo](https://github.com/Tribalnetwork/TribalNetworkRN).

**NOTE BEFORE YOU GO FURTHER:** This README is still a work in progress. If there is anything that's missing, doesn't make sense, or doesn't work, let us know! Or better yet, make a pull request with updated information. We want to make this README as robust as possible.
Here's how to get started:

## Get a copy of this repo

1.  Fork this respository by [clicking here](https://github.com/Tribalnetwork/TNWeb/fork).

2.  Clone the forked copy to your computer.

3.  Add an upstream to the shared repo:

```
cd TribalNetworkRN
git remote add upstream https://github.com/Tribalnetwork/TNWeb.git
```

You can also set the upstream remote with SSH if you have that set up.

## AWS Credentials

To get access to Tribal's AWS account, log in with this information:

_Email:_ Tribaloperations@gmail.com  
_Password:_ Skezanzu11

Of course, keep in mind that this is senstive information, and only exists in this README because this is a private repo.

## Set up Amplify on your machine

Our app uses [AWS Amplify](https://docs.amplify.aws/). You may come across some old team files that reference AWS Mobile, but please note that we are no longer using AWS Mobile.

1.  Globally install the Amplify CLI if you haven't already. [more info](https://docs.amplify.aws/cli/start/install#install-the-amplify-cli)

```
npm install -g @aws-amplify/cli
```

2.  [Configure the Amplify CLI.](https://docs.amplify.aws/cli/start/install#configure-the-amplify-cli) You will need the above credentials for this part. Stop before you reach "Work within your frontend project." You will not be running `amplify init`. Instead...

3.  After the configuration, navigate to the project root and run `amplify pull`. You may or may not be asked a series of questions, depending on if the Amplify config files you cloned already take care of it. We as a team are still trying to figure that out. Anyway, if the questions appear, answer them like this:

- `Do you want to use an AWS profile?` Choose "Yes"
- `Please choose the profile you want to use` Choose "default"
- `Which app are you working on?` Choose "TNWeb"
- `Choose your default editor` Up to you!
- `Choose the type of app that you're building` Choose "javascript"
- `What javascript framework are you using` Choose "react"
- `Source Directory Path` Hit Enter
- `Distribution Directory Path` Hit Enter
- `Build Command` Hit Enter
- `Start Command` npm start
- `Do you plan on modifying this backend?` Choose "Yes"

4. Run `amplify pull` again to sync the changes.

## Run the app locally

### Prerequisites

(You only have to do this when you are running the app for the first time.)

1. [Set up Amplify](https://github.com/Tribalnetwork/TNWeb#set-up-amplify-on-your-machine)

2. Install dependencies: `npm install`. (You only have to do this once.)

### Start

Start the local development server : `npm start`. 

The app should viewable by typing `localhost:3000` into the address bar of any web browser.

Any saved changes that you make to the files while the local development server is running will be automatically reflected in the app running at `localhost:3000` thanks to React's "hot reloading" feature.

When you want to close the local development server, return to your terminal and type `Ctrl + C` and then `y`.

## Make a contribution

1. Always start off by fetching and merging the latest changes:

```
git checkout master
git fetch --all
git merge upstream/master
```

2. Install/update dependencies

```
npm install
```

2. Create a feature branch based off master:

```
git checkout -B my_feature_branch_name_here
```

3. Start the local development server:

```
npm start
```


4. Make your edits, fix a bug, implement a feature, etc. If you're looking for something to work on, check out our [Issues](https://github.com/Tribalnetwork/TNWeb/issues) page. The [additional guides](https://github.com/Tribalnetwork/Additional-Guides) page should help you.

5. Add, commit, and push your feature branch to your Github:

```
git add .
git commit -m "Enter your description of your changes."
git push origin my_feature_branch_name_here
```

6.  Use your GitHub page to create a pull request from your feature branch to master.

7.  One of the admins will then merge your changes into the main branch. The people with write access currently are Leo, Ty, and Justin.

8.  Return to step 1 and repeat: fetch, merge, branch, edit, commit, push!
