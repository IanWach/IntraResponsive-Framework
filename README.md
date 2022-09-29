# Responsive-Web-Framework - IntraResponsive Framework

## Introduction of the Framework

IntraResponsive is a framework designed to help developers create a responsive website faster. This is to help developers focus on what matters. Moreover, it is to help developers create websites faster with no worries. 

The Framework makes use of **JavaScript, PHP, CSS, and HTML.** These are used to create a friendly environment for websites across different screen sizes.

![Image](/assets/Logo.png)

**This is web Responsive Framework aiming at ensuring all Sites are friendly for the Phone, Tablets and Computers`**

![Main](https://miro.medium.com/max/1008/1*b7y9iLMTD0drlC3Eh6E31A.png)

## Need for the Framework


Let me do a quick reminder of what web responsiveness is. For a friendly website you visit or any other web application through a computer there is the interface you see for wide screens. When you shift that to the Mobile and tablet view the screen changes.

Now if you will be able to interact with the site easily, view all the components, and have a greater user experience. The concept we can term the website to be web responsive.  Failure to which the website is unresponsive. 

To avoid all this drama of some images not fitting on the screen IntraResponsive comes in to help get friendly UI. This is to ensure your site visitors enjoy a great experience on the site. 

## How it Works

The Framework using JavaScript captures the window size (the width) then based on the range of the window it can determine what screen is for a computer tablet, or a mobile. If it is on a computer the screen will display as normal using the CSS File available.

![Image](/assets/Responsive_Design.png)

But if the window ranges lower than that of a desktop device the ranges computer screen size the Framework detects so. Then it takes the attributes stored in the JSON File. Then it adds or changes them to the element in consideration. It might be a Class or an ID.

For example, let’s take the example of a Navbar with a class navbar or an ID. What do we know about the navbar? It needs to be responsive by ensuring some CSS properties like flex are well taken care of when the screen change. Let’s say the property on a computer is 

```css
. navbar{
  	display: flex;
	justify-content: space-evenly;
}
```

What the framework does when the screen size changes to a range between 487px and 767px the framework will add a class name _**tbresp-navbar**_. This class name is linked to the CSS file given for the Tablet CSS. 

```css
.tbresp-navbar{
  	display: block;
	justify-content: space-between;
}
```

Then when it ranges below 487px. The framework takes the .**mbresp-navbar** class attribute and adds it to the Navbar Class. Then the class fetches the respective code from the Mobile CSS File. The style file to be included will be.

```css
.mbresp-navbar{
  	display: block;
	justify-content: flex-end;
}
```

I know this is what needs to be done but to do it faster I created a framework that undertakes the following. **IntraResponsive Framework** is here to solve such design problems. 
1. First, start by creating the normal files for the website. That is the **(index.html, pages, styles, scripts, and all other resources involved in the website.** Do it both for the Frontend and the back end. But for this framework, our interest is the front-end. 

2.	Now you have a file that is completely accessible for the site. As most common, you will be having just one CSS file or more for the view on a computer. If you look keenly, you will notice that when you try viewing the site on a small screen size it looks awkward.

3.	Luckily, the solution is already created you only need to add it to your website file. Here is a quick one *the framework has the subdirectories admin that has the setting files the setting other files are hanging on the main directory. This includes the Mobile and Tablet CSS.*

4.	Now go to the GitHub repository using the link below:

"[ This is the Link]""(./IntraResponsive Framework/)"
Download the zip file and extract it and add it to them your website folder in the same directory as the index.html file. The need to have the same folder directory.

5. After that add this additional CSS to the pages that are being used for the website. This is mostly the main page. Then add the links to the CSS which should lead to the Framework directory styles. Here are the links:

![Image](/assets/Linking_Styles.png)

```html
        <!-- CSS For the Responsive Design -->
        <link rel="stylesheet" href="../tablet-resp.css" type="text/css">
        <link rel="stylesheet" href="../mobile-resp.css" type="text/css">
```

6. Now at this point, the website is fully configured to take in the respective classes depending on the screen size. But there is something more you need to do. Open the admin.html file in the admin directory under the Main Framework Directory.

*Here is a screenshot of what the admin page looks like:*

![Image](/assets/the_admin_screenshot.png)

File in the values above. This will in turn be stored in the **JSON** File I created. Moreover, you can edit the **JSON** file manually. But for accuracy use this dashboard.

7.	In the **Admin dashboard**, I the point to link your class names with *respective mobile and tablet class and id names*. The syntax to change the classes is already done by the Framework. *The class names will be stored in the JSON file. Then now open the CSS files for the mobile and tablet for the responsive part.*

8.	Now with this, you will be fully having a fully responsive website across all devices. 

**NB:** *You can add more elements but ensure you link their class names to the respective Mobile and Tablet Ids or Class. To avoid confusion, ensure the Mobile class name begins with **mbresp-** and the tablet class begins with **tbresp-**. The attributes shared attributes* should start with **wbresp-**.

**Happy Coding as you use the Framework.**


_The Framework Aims at:_

1. Having Better User Interfaces
2. Making it faster to develop a web responsive site
3. Reduce the burden of creating CSS from Scratch
4. Avoid mixing up concepts for Friendly Websites
5. Ensuring User satisfaction across different sites

### Languages Used
1. Html
2. JavaScript
3. CSS
5. PHP

### Tools Used
1. JSON

## Software Development Model Used
1. Feature Based Development Model
2. Incremental Development Model
3. WaterFall Development Model

## OFFICIAL NAME

**IntraResponsive Framework**

