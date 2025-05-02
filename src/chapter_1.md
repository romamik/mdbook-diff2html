
Example diff:
```diff2html
diff --git a/.gitignore b/.gitignore
new file mode 100644
index 0000000..ea8c4bf
--- /dev/null
+++ b/.gitignore
@@ -0,0 +1 @@
+/target
diff --git a/Cargo.toml b/Cargo.toml
new file mode 100644
index 0000000..950f5d8
--- /dev/null
+++ b/Cargo.toml
@@ -0,0 +1,6 @@
+[package]
+name = "tmp"
+version = "0.1.0"
+edition = "2024"
+
+[dependencies]
diff --git a/src/main.rs b/src/main.rs
new file mode 100644
index 0000000..e7a11a9
--- /dev/null
+++ b/src/main.rs
@@ -0,0 +1,3 @@
+fn main() {
+    println!("Hello, world!");
+}
```