# sim-design

This repo holds a css file for use with the sims. It enables the coherent use of DOM elements such as sliders and buttons.

To use the file, just add

```
<link href="../sim-design/sims-styles.css" rel="stylesheet">
```

to the head of the `index.html` file before you call the sketch. (_you might need to adjust the path depending on your local systems_)

It is also available here:

```
<link href="https://ccny-physics-sims.github.io/sim-design/sims-styles.css" rel="stylesheet">
```

## Usage

See the `sketch.js` file for more complete examples.

### Buttons:

This will make a blue button

```
aButton = createButton("I'm a button");
aButton.class("sim-button");
```

Just a class name to make change it up a little:

```
aButton.class("sim-button red");
```

or

```
aButton.class("sim-button gray");
```

for example.

### Sliders

otherwise known as range inputs:

```
aSlider = createSlider(5, 100, 20);
aSlider.class("sim-slider");
```

Likewise, you can change the color by adding a class:

```
aSlider.class("sim slider red")
```

or

```
aSlider.class("sim slider gray")
```

for vertical sliders just add the subclass "vertical":

```
aSlider.class("sim slider gray vertical")
```


### Radio boxes

The allow the user to select one option from several choices


```
aRadio = createRadio();
aRadio.option('taxi', 'taxi');
aRadio.option('subway', 'subway');
aRadio.option('jetpack', 'jetpack');
aRadio.class("sim-radio");
aRadio.changed(switchMethodofTransportation);
```

You'll probably want to use the `changed()` method to call a function when the user selects a certain radio option.

Again, colors can be chosen by adding a class:

```
aRadio.class("sim-radio red");
```

```
aRadio.class("sim-radio gray");
```


Link to the live page:

[https://ccny-physics-sims.github.io/sim-design/](https://ccny-physics-sims.github.io/sim-design/)
