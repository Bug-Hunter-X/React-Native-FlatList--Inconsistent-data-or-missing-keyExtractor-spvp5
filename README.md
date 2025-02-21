# React Native FlatList Bug: Inconsistent Data or Missing keyExtractor

This repository demonstrates a common bug encountered when using FlatList in React Native: inconsistent data rendering due to a missing or faulty `keyExtractor` function.

## Problem

The FlatList component requires a unique key for each item in its data array to efficiently update and re-render the list.  Without a proper `keyExtractor`, FlatList might struggle to identify changes, leading to incorrect rendering, unexpected behavior, or even crashes.  The error message is often not very helpful.

## Solution

The solution involves providing a `keyExtractor` function that returns a unique string for each item. This function uses the item's unique identifier. If there isn't a unique identifier, you need to create one (like a temporary unique ID) for each item to avoid the error.