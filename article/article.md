## TL;DR
If you don’t want to walk through the whole process step-by-step you can simply view the final version here:
{% codesandbox sx0gp %}

I’d like to share with you a simple scroll-based animation built with Framer along with React, TS, and Emotion.


## Step 0
{% codesandbox jvc02 %}
Let's start with the bootstrapping project. I chose to use the default stack, which contains React, Typescript, Framer, and Emotion.
You can use create-react-app or just fork the sandbox. If you're not familiar with Typescript, don't worry, I'll mark up the places I'm using it and add a solution for it using plain JS

First, we need to prepare an app where we have our main file called App.tsx (or App.jsx) and our component file called Spinner.tsx (Spinner.jsx).

In the spinner’s file, we need to create a basic wrapper and paste SVG content into it (feel free to copy it from my sandbox).
You'll probably see an eyelid covering the eye. Don't worry, we'll animate it in step 2.

## Step 1
{% codesandbox pt2ob %}
The first functionality is to animate the rotation of the text around the eye as the scrolling progresses.
To do this, we'll use the built-in `useViewportScroll` hook from Framer, which will give us values from 0 to 1, with 0 being the top of the page and 1 being the end of the page.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sy5k09m4g3csu0vn1ew1.png)

As you can expect we need to multiply this value by 360 because we want to achieve the full turn. We’re using the `useTransform` hook from Framer.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dgabb30zxuxirfnltiog.png)

However, we want to make our animation a bit more fluid. We will use the `useSpring` hook for this:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxgfi8bqqxsa2gfcxfae.png)

We can manipulate this event with `stiffness` and `damping` params.
Feel free to experiment with these options.

More info about how it’s working here: https://www.framer.com/docs/motionvalue/###usespring

The only thing left for us to do is to use this value in the element we want to animate:


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fpucj4sccwjbrepfjbb5.png)

Remember that every element that we want to animate needs to be a motion element.
```
<motion.path />
```

As an additional visual effect, let's apply a 20 degree rotation to the entire wrapper.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tm256o2n1oicez5fvkvp.png)


## Step 2
[CodeSandbox](https://codesandbox.io/s/react-scroll-spinner-step-2-eye-blinking-q79pe)
As I mentioned before, let's make the eye blink.

Let's find the eyelid and add the `style` prop to it, determining the initial behaviour of it:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7r2zjic5epp739e75dhe.png)

We'd like to have a little bit of movement to it! We're saying that we want to scale it from 0 to 1 on the Y-axis in 5 seconds after loading our page and every 17 seconds after the first iteration:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/razrb6lqjq03mpzrcm9q.png)

## Step 3
{% codesandbox sx0gp %}
The last and most challenging functionality is cursor tracking eye.
Let’s start by plugging a reference to the SVG group of the eyeball.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cjk95hc8epplwndikqht.png)
and

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sg1m363xkc0dt9bff8wt.png)

Now we can take care of storing the value of the position of the cursor.
Let’s use a build-in `useMotionValue` hook from Framer.
It will give us confidence in storing up-to-date values without redundant re-renders.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u07c0ervd7xyuj9haa38.png)

Then we need to establish the range of moves of the iris on the Y and X axes.
In this hook, we need to define the size of the eye element and the range. We want the iris to move from -40px to 40px at the center of the X-axis and from -15px to 15px on the Y-axis.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9j45goc6weyhkxpb82yq.png)

The next thing to do is combine and update this data with a mouse move event: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fe59x3b5fslqql524a79.png)

The next step is to assign these values to SVG elements that represent them:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2m6zdg1brbqhq92s9r3e.png)



## Summary
And finally, there we have it! 
You can see the final results here:
{% codesandbox sx0gp %}

Feel free to experiment and have fun improving these effects and making new ones!