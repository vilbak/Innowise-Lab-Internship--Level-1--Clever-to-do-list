# Innowise Lab Internship: Level 1: Clever to-do list

To do  app for Innowise Lab Internship by Andrew Zakharov. Created using React and Firebase

## Task requirements

You can find task requirements [here](https://docs.google.com/document/d/1heFuihWrsw14bCpUdr6fla9ysqE6IrsobSMKAOpBiKA/edit#heading=h.cfna4so9wux2)

### Run the App

This app is hosted on Vercel. [Link](https://innowise-lab-internship-level-1-clever-to-do-list.vercel.app/)

If you want run this app locally, clone  this repository.


After clonning you need to run npm i command to get all dependencies.



## Database snapshot
    .
    └──users
        └──id               #Unique user id generated when user signs up
    └──notes                #All notes that were created
        └──id               #Unique user id generated  when user signs up
        ├──createdAt        #Date of the creation the note
        ├──description      #Description of the note
        └──note             #Note title
        └──done             #Status of completion

# Application Stack

## Axios
Used for http requests

## Moment
Used to simplify working with dates

## Redux
Used for storring data

## React Dates
Used for calendar

## React toastify
Used for handling errors

## Vercel
Used for hoisting


