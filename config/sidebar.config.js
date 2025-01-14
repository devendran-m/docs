module.exports = {
    concepts: [
        "concepts/index", // TODO show concepts in breadcrumbs
        "concepts/intro-to-dapps",
        "concepts/accounts-and-keys",
        "concepts/hash-types",
        "concepts/deploy-and-deploy-lifecycle",
        "concepts/global-state",
        "concepts/smart-contracts",
        "concepts/callstack",
        "concepts/dictionaries",
        "concepts/serialization-standard",
        {
            type: "category",
            label: "Design",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "concepts/design/index",
            },
            items: ["concepts/design/casper-design", "concepts/design/p2p", "concepts/design/highway", "concepts/design/reading-and-writing-to-the-blockchain"],
        },
        {
            type: "category",
            label: "Economics",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "concepts/economics/index",
            },
            items: [
                "concepts/economics/consensus",
                "concepts/economics/runtime",
                "concepts/economics/gas-concepts",
                "concepts/economics/concepts",
                "concepts/economics/staking",
                "concepts/economics/delegation",
            ],
        },
        {
            type: "category",
            label: "Glossary",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "concepts/glossary/index",
            },
            items: [
                "concepts/glossary/A",
                "concepts/glossary/B",
                "concepts/glossary/C",
                "concepts/glossary/D",
                "concepts/glossary/E",
                "concepts/glossary/F",
                "concepts/glossary/G",
                "concepts/glossary/H",
                "concepts/glossary/I",
                "concepts/glossary/J",
                "concepts/glossary/K",
                "concepts/glossary/L",
                "concepts/glossary/M",
                "concepts/glossary/N",
                "concepts/glossary/O",
                "concepts/glossary/P",
                "concepts/glossary/Q",
                "concepts/glossary/R",
                "concepts/glossary/S",
                "concepts/glossary/T",
                "concepts/glossary/U",
                "concepts/glossary/V",
                "concepts/glossary/W",
                "concepts/glossary/X",
                "concepts/glossary/Y",
                "concepts/glossary/Z",
            ],
        },
    ],
    developers: [
        "developers/index", // TODO show developers in breadcrumbs
        "developers/table-of-contents",
        "developers/prerequisites",
        {
            type: "category",
            label: "Writing On-Chain Code",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "developers/writing-onchain-code/index",
            },
            items: [
                "developers/writing-onchain-code/getting-started",
                "developers/writing-onchain-code/assembly-script",
                "developers/writing-onchain-code/simple-contract",
                "developers/writing-onchain-code/testing-contracts",
                "developers/writing-onchain-code/upgrading-contracts",
                "developers/writing-onchain-code/calling-contracts",
                "developers/writing-onchain-code/contract-vs-session",
                "developers/writing-onchain-code/writing-session-code",
                "developers/writing-onchain-code/testing-session-code",
                "developers/writing-onchain-code/best-practices",
            ],
        },
        {
            type: "category",
            label: "Casper JSON-RPC API",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "developers/json-rpc/index",
            },
            items: [
                "developers/json-rpc/guidance",
                "developers/json-rpc/minimal-compliance",
                "developers/json-rpc/json-rpc-transactional",
                "developers/json-rpc/json-rpc-informational",
                "developers/json-rpc/json-rpc-pos",
                "developers/json-rpc/types_chain",
                "developers/json-rpc/types_cl",
            ],
        },
        {
            type: "category",
            label: "Building dApps",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "developers/dapps/index",
            },
            items: [
                "developers/dapps/dapp",
                "developers/dapps/prerequisites",
                {
                    type: "category",
                    label: "SDK Client Libraries",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "developers/dapps/sdk/index",
                    },
                    items: [
                        "developers/dapps/sdk/client-library-usage",
                        "developers/dapps/sdk/script-sdk",
                        "developers/dapps/sdk/csharp-sdk",
                        "developers/dapps/sdk/go-sdk",
                        "developers/dapps/sdk/python-sdk",
                        //"developers/dapps/sdk/additional-libraries", // NEW CONTENT WILL BE HERE
                    ],
                },
                "developers/dapps/technology-stack",
                "developers/dapps/setup-nctl",
                "developers/dapps/nctl-test",
                "developers/dapps/template-frontend",
                "developers/dapps/signing-a-deploy",
                "developers/dapps/sending-deploys",
                //"developers/dapps/signer-integration",
                //"developers/dapps/callstack-based", // NEW CONTENT WILL BE HERE
                "developers/dapps/monitor-and-consume-events",
            ],
        },
        {
            type: "category",
            label: "Interacting with the Blockchain using CLI",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "developers/cli/index",
            },
            items: [
                {
                    type: "category",
                    label: "Transferring Tokens",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "developers/cli/transfers/index",
                    },
                    items: [
                        "developers/cli/transfers/direct-token-transfer",
                        "developers/cli/transfers/multisig-deploy-transfer",
                        "developers/cli/transfers/verify-transfer",
                    ],
                },
                "developers/cli/delegate",
                "developers/cli/undelegate",
                "developers/cli/installing-contracts",
                "developers/cli/calling-contracts",
                "developers/cli/execution-error-codes",
            ],
        },
    ],
    operators: [
        "operators/index", // TODO show operators in breadcrumbs
        {
            type: "category",
            label: "Node Setup",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "operators/setup/index",
            },
            items: [
                "operators/setup/hardware",
                "operators/setup/basic-node-configuration",
                "operators/setup/node-endpoints",
                "operators/setup/install-node",
                "operators/setup/open-files",
                "operators/setup/upgrade",
                "operators/setup/joining",
                "operators/setup/non-root-user",
            ],
        },
        {
            type: "category",
            label: "Validators",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "operators/becoming-a-validator/index",
            },
            items: [
                "operators/becoming-a-validator/bonding",
                "operators/becoming-a-validator/unbonding",
                "operators/becoming-a-validator/recovering",
                "operators/becoming-a-validator/inactive-vs-faulty",
            ],
        },
        {
            type: "category",
            label: "Private Networks",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "operators/setup-network/index",
            },
            items: ["operators/setup-network/chain-spec", "operators/setup-network/create-private", "operators/setup-network/staging-files-for-new-network"],
        },
        {
            type: "category",
            label: "Maintenance",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "operators/maintenance/index",
            },
            items: ["operators/maintenance/archiving-and-restoring", "operators/maintenance/moving-node"],
        },
    ],
    resources: [
        "resources/index", // TODO show resources in breadcrumbs
        {
            type: "category",
            label: "Why Build on Casper",
            collapsible: true,
            collapsed: true,
            items: ["resources/build-on-casper/index", "resources/build-on-casper/casper-open-source-software"],
        },
        "resources/quick-start",
        //"resources/sample-projects", // NEW CONTENT WILL BE HERE
        {
            type: "category",
            label: "Tutorials",
            collapsible: true,
            collapsed: true,
            link: {
                type: "doc",
                id: "resources/tutorials/index",
            },
            items: [
                {
                    type: "category",
                    label: "Beginner Tutorials",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "resources/tutorials/beginner/index",
                    },
                    items: [
                        "resources/tutorials/beginner/getting-started-tutorial",
                        "resources/tutorials/beginner/querying-network",
                        "resources/tutorials/beginner/upgrade-contract",
                        "resources/tutorials/beginner/aws-node",
                        "resources/tutorials/beginner/cep18",
                        {
                            type: "category",
                            label: "A Counter on the Testnet",
                            collapsible: true,
                            collapsed: true,
                            link: {
                                type: "doc",
                                id: "resources/tutorials/beginner/counter-testnet/index",
                            },
                            items: [
                                "resources/tutorials/beginner/counter-testnet/overview",
                                "resources/tutorials/beginner/counter-testnet/commands",
                                "resources/tutorials/beginner/counter-testnet/walkthrough",
                            ],
                        },
                        {
                            type: "category",
                            label: "A Counter on an NCTL Network",
                            collapsible: true,
                            collapsed: true,
                            className: "text_transform_reset",
                            link: {
                                type: "doc",
                                id: "resources/tutorials/beginner/counter/index",
                            },
                            items: [
                                "resources/tutorials/beginner/counter/overview",
                                "resources/tutorials/beginner/counter/commands",
                                "resources/tutorials/beginner/counter/walkthrough",
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Advanced Tutorials",
                    collapsible: true,
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "resources/tutorials/advanced/index",
                    },
                    items: [
                        "resources/tutorials/advanced/cross-contract",
                        "resources/tutorials/advanced/transfer-token-to-contract",
                        "resources/tutorials/advanced/two-party-multi-sig",
                        "resources/tutorials/advanced/return-values-tutorial",
                        //"resources/tutorials/advanced/list-cspr",
                        "resources/tutorials/advanced/storage-workflow",
                    ],
                },
            ],
        },
        //"resources/contribute-to-docs", // NEW CONTENT WILL BE HERE
        //"resources/changelog", // NEW CONTENT WILL BE HERE
        //"resources/support", // NEW CONTENT WILL BE HERE
    ],
    users: [
        "users/index", // TODO show users in breadcrumbs
        "users/block-explorer",
        "users/delegate-ui",
        "users/undelegate-ui",
        "users/ledger-setup",
        "users/staking-ledger",
        "users/token-transfer",
        "users/funding-from-exchanges",
        "users/testnet-faucet",
    ],
};
