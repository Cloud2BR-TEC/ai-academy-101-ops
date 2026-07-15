# Governance and Security

Governance and security are operating capabilities, not a final documentation step. They make AI behavior traceable, protect sensitive information, and ensure people can make informed decisions when a model or application changes.

!!! important "Protect the decision path"
    Secure infrastructure is necessary but insufficient. Protect the full path from input and instruction through retrieval, model or tool execution, output validation, human review, and authoritative business action.

> **Control principle:** Every material AI behavior change should have an accountable owner, an enforcement mechanism, and reviewable evidence.

## Risk-tiered governance

| Tier | Example characteristics | Governance response |
| --- | --- | --- |
| Low | Internal productivity support, no sensitive data, no consequential action | Baseline security, named owner, versioned release, basic evaluation |
| Moderate | Business process support, confidential data, human-reviewed recommendations | Formal evaluation, access review, documented escalation, change approval |
| High | Financial, health, employment, legal, or customer-impacting decisions | Enhanced review, stronger evaluation and monitoring, human authority, incident exercises |

## Control domains

| Domain | Control objective | Azure-aligned practices |
| --- | --- | --- |
| Identity | Authenticate every user and workload; use least privilege | Microsoft Entra ID, managed identities, RBAC, conditional access |
| Secrets | Keep credentials out of source, prompts, and logs | Azure Key Vault, workload identity, rotation and access review |
| Network | Reduce unnecessary exposure and control data paths | Private endpoints, firewall rules, private DNS, egress controls |
| Data | Classify, minimize, retain appropriately, and preserve lineage | ADLS controls, Purview, encryption, retention policies, approved evaluation datasets |
| Supply chain | Verify artifacts and dependencies before release | Dependency scanning, signed artifacts, pinned environments, IaC review |
| AI safety | Prevent unsafe use and validate consequential output | Content safety, groundedness checks, input validation, human approval, audit trail |

## GenAI-specific threat questions

| Threat | Key question | Example control |
| --- | --- | --- |
| Prompt injection | Can untrusted text override system instructions or tool constraints? | Treat retrieved and user content as data; validate tool arguments and limit authority |
| Data exfiltration | Can a prompt, tool, or retrieval path disclose protected data? | Least privilege, scoped retrieval, DLP, output filtering, egress control |
| Unsafe action | Can the model execute an irreversible or high-impact action? | Explicit authorization, confirmation, idempotency, human approval, audit logs |
| Grounding failure | Can the app present invented claims as factual? | Retrieval quality checks, citations, abstention policy, source freshness controls |

??? abstract "Governance evidence package"
    For a material AI release, retain:

    - Intended use, prohibited use, risk assessment, and accountable business owner.
    - Data or knowledge-source classification, retention, and access decisions.
    - Versioned implementation and runtime configuration.
    - Evaluation results for quality, safety, meaningful slices, and operational performance.
    - Approval, rollout, monitoring, rollback, and post-release verification evidence.

## Incident readiness

Prepare for degraded quality, unsafe outputs, access anomalies, dependency failure, data exposure, and unintended tool actions. Runbooks should name the first safe action, required approvals, evidence to preserve, containment options, recovery steps, and stakeholder communications.

Do not assume every incident requires the same response. A latency issue may allow reduced functionality; a valid-looking but incorrect financial output may require immediate containment even when the service is otherwise healthy.

## Operational readiness checklist

1. Owners, risk tier, support model, and escalation contacts are approved.
2. Identity, network, secrets, and data controls are validated in the deployed environment.
3. Evaluation evidence and release decision are retained and discoverable.
4. Monitoring, alert ownership, and privacy-aware telemetry are operational.
5. Rollback, containment, and recovery procedures are tested.
6. Cost, quota, retention, and evidence obligations are understood by the workload owner.