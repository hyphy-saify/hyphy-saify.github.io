<template>
  <div class="post1 blogpost">
    <div class="blogpost__title">
      <h3>
        <a
          href="#/blog/some-of-my-favorite-vs-code-extentions"
        >Some of My Favorite VS Code Extentions - Aesthetic Only</a>
      </h3>
      <small>
        April 1
        <sup>st</sup>, 2019
      </small>
    </div>

    <div class="blogpost__content">
      <p>VS Code has really stolen the show when it comes to “simple” text editors. I’ve compiled a short list of some of my favorite non stack specific extensions. Beauty is in the eye of the beholder, so take these as you will.</p>
      <h4>1. Color Themes</h4>
      <p>After sampling many different color themes, I’ve narrowed it down to three personal favorites: Gotham, Railgun, and Horizon. I wouldn’t be surprised if this list were to change really soon.</p>
      <Tabs value="Gotham" size="small">
        <TabPane label="Gotham" name="Gotham">
          <img src="../img/blogposts/post1/theme-gotham.png">
        </TabPane>
        <TabPane label="Railgun" name="Railgun">
          <img src="../img/blogposts/post1/theme-railgun.png">
        </TabPane>
        <TabPane label="Horizon" name="Horizon">
          <img src="../img/blogposts/post1/theme-horizon.png">
        </TabPane>
      </Tabs>

      <h4>2. Icon Themes</h4>
      <p>
        I do have a single favorite icon theme:
        <b>Field Lights Minimalistic</b>
      </p>
      <img src="../img/blogposts/post1/icon-theme.png">

      <h4>3. Todo Highlight</h4>
      <p>This one is simple, it highlights your TODOs and FIXMEs. I believe they also let you add custom keywords and colors, but I haven’t gotten around to that yet.</p>
      <p>Would be nice to highlight some other words I commonly use for debugging…</p>
      <img src="../img/blogposts/post1/todo-fixme.png">

      <h4>4. Color Highlight</h4>
      <p>Pretty much the same as TODO highlight, but for colors</p>
      <img src="../img/blogposts/post1/color-hightlight.png">

      <h4>5. Peacock</h4>
      <p>This one is probably one of the most useful items on this list. Peacock comes in really useful when you’ve got multiple VS Code projects open, and you’re having a hard time keeping track of which is which. Peacock allows you to specify a color for each project, which VS Code remembers the next time you open that project.</p>
      <p>
        For more info, go
        <a
          target="_blank"
          href="https://dev.to/john_papa/peacock---late-night-coding-ftw-3pk0"
        >here</a>.
      </p>
      <img src="../img/blogposts/post1/peacock.png">

      <h4>6. Indent Rainbow</h4>
      <p>You may have noticed this one by now. Indent-rainbow allows you to have some cool effects on your indentations, which you can customize to your liking.</p>
      <img src="../img/blogposts/post1/rainbow-indent.png">
      <p>If you want the same effect shown here, copy this into your settings.json.</p>

      <pre style="margin:0;">
        <code>
          {{rainbowCode}}
        </code>
      </pre>
      <h4>Bonus: Centered Layout</h4>
      <p>Not an extension, but I like this thing too.</p>
      <p>View -> Appearance -> Toggle Centered Layout to get into extra focused coding mode. Toggle Zen Mode too while you’re at it!</p>
      <img src="../img/blogposts/post1/centered-layout.png">
    </div>
  </div>
</template>

<style lang="sass">
.post1 {
}
</style>

<script>
export default {
  data() {
    return {
      rainbowCode: `
"indentRainbow.colors": [
    "rgba(76,76,76,0.1)",
    "rgba(76,76,76,0.2)",
    "rgba(76,76,76,0.3)",
    "rgba(76,76,76,0.4)",
    "rgba(76,76,76,0.5)",
    "rgba(76,76,76,0.6)",
    "rgba(76,76,76,0.7)",
    "rgba(76,76,76,0.8)",
    "rgba(76,76,76,0.9)",
    "rgba(76,76,76,1.0)"
],`
    };
  }
};
</script>
