//code\


const pigLatin = (str) => {
    str = str.toLowerCase()
    str = str.trim()
    str = str.split(' ')
    for (i = 0; i < str.length; i++) {
        if (str[i].startsWith('a','e','i' ,'o' ,'u')) {
            str[i] += 'yay'
 
        } else {
            newStr = str[i][0]
            str[i] = str[i].replace(str[i][0], '')
            str[i] += newStr
            str[i] += 'ay'
        }
    } str = str.join(' ')
    return str
}

console.log(pigLatin(`Somebody once told me the world is gonna roll me
I ain't the sharpest tool in the shed
She was looking kind of dumb with her finger and her thumb
In the shape of an "L" on her forehead
Well the years start coming and they don't stop coming
Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart but your head gets dumb
So much to do, so much to see
So what's wrong with taking the back streets?
You'll never know if you don't go
You'll never shine if you don't glow
Hey now, you're an all-star, get your game on, go play
Hey now, you're a rock star, get the show on, get paid
And all that glitters is gold
Only shooting stars break the mold
It's a cool place and they say it gets colder
You're bundled up now, wait 'til you get older
But the meteor men beg to differ
Judging by the hole in the satellite picture
The ice we skate is getting pretty thin
The water's getting warm so you might as well swim
My world's on fire, how about yours?
That's the way I like it and I'll never get bored
Hey now, you're an all-star, get your game on, go play
Hey now, you're a rock star, get the show on, get paid
All that glitters is gold
Only shooting stars break the mold
Hey now, you're an all-star, get your game on, go play
Hey now, you're a rock star, get the show, on get paid
And all that glitters is gold
Only shooting stars
Somebody once asked could I spare some change for gas?
I need to get myself away from this place
I said, "Yup" what a concept
I could use a little fuel myself
And we could all use a little change
Well, the years start coming and they don't stop coming
Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart but your head gets dumb
So much to do, so much to see
So what's wrong with taking the back streets?
You'll never know if you don't go go!
You'll never shine if you don't glow
Hey now, you're an all-star, get your game on, go play
Hey now, you're a rock star, get the show on, get paid
And all that glitters is gold
Only shooting stars break the mold
And all that glitters is gold
Only shooting stars break the mold`))




//Sorry, I couldn't help but try.



//"Allstar" by Smash Mouth lyrics from https://www.google.com/search?q=all+star+lyrics&rlz=1C1ONGR_enUS967US967&sxsrf=AOaemvJo75G6cwwd8rcqmtTjnRq8-1M6zw%3A1634934144414&ei=gB1zYei4GIapqtsPpfapSA&oq=all+star+lyrics&gs_lcp=Cgdnd3Mtd2l6EAEYADIGCAAQChBDMgYILhAKEEMyBQgAEIAEMgsILhCABBDHARCvATILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATILCC4QgAQQxwEQrwEyBwgAEIAEEAoyCwguEIAEEMcBEK8BOgQIIxAnOgUIABCRAjoLCC4QgAQQxwEQowI6CAguELEDEIMBOgsIABCABBCxAxCDAToLCC4QgAQQsQMQgwE6DgguEIAEELEDEMcBEKMCOgQIABBDOgQILhBDOggILhCABBCxAzoHCC4QsQMQQzoICAAQgAQQsQM6BwgAELEDEENKBAhBGABQniVY9kFg3lJoAHABeACAAYABiAGqBpIBAzQuNJgBAKABAcABAQ&sclient=gws-wiz