# pizza-amore — deploy target

This repository only hosts the GitHub Pages site for **Amore Pizzeria**: https://pizzamore.rs

The branch `gh-pages` holds the built static site and is replaced on every deploy. The source code lives in the
private repository `ordering-food-ns` (one engine, one tenant per build); the engine's deploy script pushes the build
here. The former contents of `main` moved there on 2026-10-24 and were removed from this branch.
