# Architecture Analysis

> **Instructions:** Use this template to structure your analysis. Replace the example content with your own findings.

---

## 1. Issue Identification

### Issue #1: [Brief Title]
- **Location:** `filename.tsx` lines X-Y
- **Category:** [Performance / Architecture / Maintainability / Testing / UX]
- **Description:** [What's wrong and why it's problematic]
- **Impact:** 
  - **Users:** [How it affects end users]
  - **Developers:** [How it affects development team]
  - **Example scenario:** [Concrete example of when this causes problems]

### Issue #2: [Brief Title]
- **Location:** `filename.tsx` lines X-Y
- **Category:** [Performance / Architecture / Maintainability / Testing / UX]
- **Description:** [What's wrong and why it's problematic]
- **Impact:**
  - **Users:** [How it affects end users]
  - **Developers:** [How it affects development team]
  - **Example scenario:** [Concrete example of when this causes problems]

[Continue for all 6-8 issues...]

---

## 2. Prioritization Matrix

| Issue | Priority | Effort | User Impact | Dev Impact | Justification |
|-------|----------|--------|-------------|------------|---------------|
| #1    | P0       | M      | High        | Medium     | [Why this priority?] |
| #2    | P1       | S      | Medium      | High       | [Why this priority?] |
| #3    | P1       | L      | Low         | High       | [Why this priority?] |
| #4    | P2       | M      | Low         | Medium     | [Why this priority?] |
| #5    | P2       | S      | Medium      | Low        | [Why this priority?] |
| #6    | P3       | L      | Low         | Low        | [Why this priority?] |

**Priority Definitions:**
- **P0 (Blocker):** Must fix before next release
- **P1 (High):** Significantly impacts users or dev velocity
- **P2 (Medium):** Technical debt to address soon
- **P3 (Low):** Nice-to-have improvements

**Effort Estimates:**
- **S (Small):** 1-4 hours
- **M (Medium):** 4-8 hours
- **L (Large):** 1-3 days

### Top 3 Priorities - Detailed Justification

#### Why Issue #X is Priority [P0/P1]:
[Explain in 2-3 sentences why this issue deserves top priority. Consider:
- Business/user impact
- Risk if not fixed
- Blocking other work
- Frequency of occurrence
- Cost to fix now vs later]

#### Why Issue #Y is Priority [P0/P1]:
[Your justification]

#### Why Issue #Z is Priority [P0/P1]:
[Your justification]

---

## 3. Solution Proposals

### Issue #1: [Issue Title]

#### Option A: [Solution Name]
**Description:** [Brief description of approach]

**Pros:**
- [Pro 1]
- [Pro 2]
- [Pro 3]

**Cons:**
- [Con 1]
- [Con 2]

**Effort:** [S/M/L]

**Trade-offs:** [What you gain vs what you lose]

#### Option B: [Solution Name]
**Description:** [Brief description of approach]

**Pros:**
- [Pro 1]
- [Pro 2]

**Cons:**
- [Con 1]
- [Con 2]
- [Con 3]

**Effort:** [S/M/L]

**Trade-offs:** [What you gain vs what you lose]

#### Option C (Optional): [Solution Name]
[Same structure as above]

#### My Recommendation: [Option A/B/C]
**Why:** [2-3 sentences explaining your choice. Consider:
- Project constraints (team size, timeline, users)
- Long-term maintainability
- Risk level
- What you'd monitor after implementing]

---

### Issue #2: [Issue Title]
[Repeat same structure as Issue #1]

---

### Issue #3: [Issue Title]
[Repeat same structure as Issue #1]

---

## 4. What I'm NOT Fixing (And Why)

### Issues [#4, #5, #6...]
**Why deferring:**
- [Reason 1: e.g., Lower user impact]
- [Reason 2: e.g., Requires longer timeline than available]
- [Reason 3: e.g., Should be addressed after higher priorities]

**When to revisit:**
- [Condition 1: e.g., After next release]
- [Condition 2: e.g., If performance becomes critical]
- [Condition 3: e.g., During next architecture review]

**Risk of deferring:**
- [What could go wrong if we don't fix these soon]

---

## 5. Assumptions & Questions

### Assumptions I Made:
1. [Assumption about team, timeline, or requirements]
2. [Assumption about user base or usage patterns]
3. [Assumption about tech stack constraints]

### Questions I Would Ask:
1. [Question about requirements or constraints]
2. [Question about team or process]
3. [Question about future plans]

---

## 6. Implementation Notes

### Which issue I chose to refactor: Issue #[X]

**Why this one:**
- [Reason 1]
- [Reason 2]
- [Reason 3]

**Approach taken:**
- [High-level description of your refactoring approach]

**What changed:**
- [List key changes made]

**What stayed the same:**
- [What you preserved and why]

---

## Summary

**Total issues identified:** [X]
**Addressed in refactoring:** [Y]
**Deferred:** [Z]

**Key insight:** [One sentence summarizing your main architectural finding]

**Biggest concern:** [What worries you most about the current codebase]

**Biggest opportunity:** [What improvement would have the most impact]
