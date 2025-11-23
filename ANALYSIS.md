# Architectural Issues Analysis

A structured review of architectural, performance, and maintainability issues found in the codebase, along with prioritization and recommended fixes.

---

## 1. Issue Identification

### 1.1 No Unit Tests
- **Location:** All components
- **Category:** Testing
- **Impact:** Lack of tests risks regressions and makes refactoring unsafe.
- **Details:** Vitest is installed but no tests exist.

### 1.2 App Fetches Too Much Data
- **Location:** `src/App.tsx` (`fetchPokemonList`)
- **Category:** Performance
- **Impact:** Fetches 1000 Pokémon but displays only 10, wasting bandwidth/time.

### 1.3 Sequential Enhancement Fetching
- **Location:** `src/App.tsx`
- **Category:** Performance
- **Impact:** Details are fetched sequentially instead of in parallel, increasing load times.

### 1.4 Errors During Enhancement Halt Entire List
- **Location:** `src/App.tsx`
- **Category:** UX
- **Impact:** A single Pokémon fetch failure prevents all data from displaying, for example Pokémon ID: 477.

### 1.5 Components Have Mixed Responsibilities
- **Location:** `PokemonList.tsx`, `PokemonItem.tsx`
- **Category:** Maintainability
- **Impact:** UI, styling, and logic are mixed, violating separation of concerns.

### 1.6 Pokémon Details Logic Inside Main Component
- **Location:** `src/App.tsx`
- **Category:** Architecture / Maintainability
- **Impact:** Main component becomes bloated and hard to maintain.

### 1.7 Data structures are missing from the application
- **Location:** `All components
- **Category:** Maintainability
- **Impact:** There are no types or interfaces for data structure, making the code hard to maintain.
---

## 2. Prioritization Matrix

| Issue                                  | Impact | Effort | Priority |
|----------------------------------------|--------|--------|----------|
| The app fetches too much data          | High   | Low    | High     |
| Error during enhancing list item       | High   | Medium | High     |
| No unit tests                          | Medium | High   | High     |
| Fetching requests are sequential       | Medium | Medium | Medium   |
| Fetching logic in main component       | Medium | Low    | Medium   |
| Add data structures for Pokemon object | Low    | Medium | Low      |
| Mixed responsibilities in components   | Low    | Medium | Low      |
---

## 3. Recommended Solutions (Top 3 Priorities)

### 3.1 Reduce Data Fetching (Issue 2)

**Goal:** Display only 10 Pokémon without loading the entire dataset.

**Current performance:** Data fetches 1000 items, (47ms, 9.5kB)

**Solution A — Random Offset (Recommended)**
- Fetch only required items using a random offset.
- Fast (16ms, 1kb).
- Less random distribution, for example we will not have the first item with 20th item.

**Solution B — 10 Random IDs**
- Fully random.
- Requires 10 separate requests.

**Recommendation:** Choose **Solution A** for high performance and simplicity.

---

### 3.2 Handle Enhancement Failures Gracefully (Issue 4)

**Solution A (Recommended):**
- Handle errors per-item.
- Log failure, continue loading rest.
- Display placeholder for problematic Pokémon.

**Solution B:**
- Retry with different Pokémon.
- More complex and slower.

**Recommendation:** **Solution A** keeps good UX with minimal complexity.

---

### 3.3 Add Unit Tests (Issue 1)

**Solution:**
- Begin writing tests for critical components using Vitest.
- Improves maintainability and reduces bugs.

**Tradeoff:**
- High effort initially, but worth it long-term.

---


