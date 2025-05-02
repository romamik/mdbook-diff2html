# Embed diff2html into the mdbook

**[diff2html](https://diff2html.xyz/)** is a diff parser and pretty html generator that can show diffs in a HTML page.

**[mdbook](https://rust-lang.github.io/mdBook/)** is a command line tool to create books with Markdown written in Rust and popular among Rust developers.

This tiny project allows to use **diff2html** to show diffs inside the **mdbook**.

## Usage

Put the `diff2html.js` file from this repository next to your `book.toml` file. 

Inside the `book.toml` add `diffhtml.js` to `additional-js` in the `[output.html]` section:
```toml
[output.html]
additional-js=["diff2html.js"]
```

Inside your markdown files add a code block with the language `diff2html`:
````
Example diff:
```diff2html
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..ea8c4bf
--- /dev/null
+++ b/.gitignore
@@ -0,0 +1 @@
+/target
```
````

And the result should look like this:
![mdbook with diff2html](screenshot.png)

## License

Public domain.