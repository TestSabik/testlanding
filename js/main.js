window.userAddress = null;

const SNOWMEN_CONTRACT_ADDRESS = "0xdde52b60ad8473eee7888ab1d11a14a3364cafa2";
const SNOWMEN_ABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_APileOfSnowAddress",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{ inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "ApproveToCaller", type: "error" },
	{ inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
	{ inputs: [], name: "InvalidQueryRange", type: "error" },
	{ inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
	{ inputs: [], name: "MintToZeroAddress", type: "error" },
	{ inputs: [], name: "MintZeroQuantity", type: "error" },
	{ inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
	{ inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
	{
		inputs: [],
		name: "TransferToNonERC721ReceiverImplementer",
		type: "error",
	},
	{ inputs: [], name: "TransferToZeroAddress", type: "error" },
	{ inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "fromTokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "toTokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "ConsecutiveTransfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "basePrice",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "burnedByOwner",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "explicitOwnershipOf",
		outputs: [
			{
				components: [
					{ internalType: "address", name: "addr", type: "address" },
					{
						internalType: "uint64",
						name: "startTimestamp",
						type: "uint64",
					},
					{ internalType: "bool", name: "burned", type: "bool" },
					{
						internalType: "uint24",
						name: "extraData",
						type: "uint24",
					},
				],
				internalType: "struct IERC721A.TokenOwnership",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
		],
		name: "explicitOwnershipsOf",
		outputs: [
			{
				components: [
					{ internalType: "address", name: "addr", type: "address" },
					{
						internalType: "uint64",
						name: "startTimestamp",
						type: "uint64",
					},
					{ internalType: "bool", name: "burned", type: "bool" },
					{
						internalType: "uint24",
						name: "extraData",
						type: "uint24",
					},
				],
				internalType: "struct IERC721A.TokenOwnership[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_wallet", type: "address" }],
		name: "getPayableAmount",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "maxSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "melt",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "minTokenNeeded",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "mint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "qty", type: "uint256" },
		],
		name: "mintAdmin",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "mintedBySender",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "newBasePrice", type: "uint256" },
		],
		name: "setBasePrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "_uri", type: "string" }],
		name: "setBaseTokenURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "newSupply", type: "uint256" },
		],
		name: "setMaxSupply",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "newMinTokenNeeded",
				type: "uint256",
			},
		],
		name: "setMinTokenNeeded",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "bytes4", name: "interfaceId", type: "bytes4" },
		],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "toggleMint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "tokensNeeded",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "tokensOfOwner",
		outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "uint256", name: "start", type: "uint256" },
			{ internalType: "uint256", name: "stop", type: "uint256" },
		],
		name: "tokensOfOwnerIn",
		outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalBurned",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "newOwner", type: "address" },
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const PILE_CONTRACT_ADDRESS = "0xc9fba54b933fabec28ee4da7401f79be973e67f2";
const PILE_ABI = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_APileOfSnowAddress",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{ inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "ApproveToCaller", type: "error" },
	{ inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
	{ inputs: [], name: "InvalidQueryRange", type: "error" },
	{ inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
	{ inputs: [], name: "MintToZeroAddress", type: "error" },
	{ inputs: [], name: "MintZeroQuantity", type: "error" },
	{ inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
	{ inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
	{ inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
	{ inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
	{
		inputs: [],
		name: "TransferToNonERC721ReceiverImplementer",
		type: "error",
	},
	{ inputs: [], name: "TransferToZeroAddress", type: "error" },
	{ inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "approved",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "operator",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "approved",
				type: "bool",
			},
		],
		name: "ApprovalForAll",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "fromTokenId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "toTokenId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "ConsecutiveTransfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "tokenId",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "basePrice",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "burnedByOwner",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "explicitOwnershipOf",
		outputs: [
			{
				components: [
					{ internalType: "address", name: "addr", type: "address" },
					{
						internalType: "uint64",
						name: "startTimestamp",
						type: "uint64",
					},
					{ internalType: "bool", name: "burned", type: "bool" },
					{
						internalType: "uint24",
						name: "extraData",
						type: "uint24",
					},
				],
				internalType: "struct IERC721A.TokenOwnership",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
		],
		name: "explicitOwnershipsOf",
		outputs: [
			{
				components: [
					{ internalType: "address", name: "addr", type: "address" },
					{
						internalType: "uint64",
						name: "startTimestamp",
						type: "uint64",
					},
					{ internalType: "bool", name: "burned", type: "bool" },
					{
						internalType: "uint24",
						name: "extraData",
						type: "uint24",
					},
				],
				internalType: "struct IERC721A.TokenOwnership[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "getApproved",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "_wallet", type: "address" }],
		name: "getPayableAmount",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "operator", type: "address" },
		],
		name: "isApprovedForAll",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "maxSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "melt",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "minTokenNeeded",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "mint",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "qty", type: "uint256" },
		],
		name: "mintAdmin",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "mintedBySender",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "ownerOf",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		name: "safeTransferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "operator", type: "address" },
			{ internalType: "bool", name: "approved", type: "bool" },
		],
		name: "setApprovalForAll",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "newBasePrice", type: "uint256" },
		],
		name: "setBasePrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "string", name: "_uri", type: "string" }],
		name: "setBaseTokenURI",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "uint256", name: "newSupply", type: "uint256" },
		],
		name: "setMaxSupply",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "newMinTokenNeeded",
				type: "uint256",
			},
		],
		name: "setMinTokenNeeded",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "bytes4", name: "interfaceId", type: "bytes4" },
		],
		name: "supportsInterface",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "toggleMint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
		name: "tokenURI",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "tokensNeeded",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "address", name: "owner", type: "address" }],
		name: "tokensOfOwner",
		outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "uint256", name: "start", type: "uint256" },
			{ internalType: "uint256", name: "stop", type: "uint256" },
		],
		name: "tokensOfOwnerIn",
		outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalBurned",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "from", type: "address" },
			{ internalType: "address", name: "to", type: "address" },
			{ internalType: "uint256", name: "tokenId", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "newOwner", type: "address" },
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "withdraw",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
const defaultChain = "mainnet";
const defaultChainId = 1;
const defaultChainName = "Ethereum Mainnet";
// const defaultChain = "rinkeby";
// const defaultChainId = 4;
// const defaultChainName = "Rinkeby";
let mintOpen = false;
let isApprovedForSpending = false;
let approveInProgress = false;
let mintInProgress = false;
let payableAmount = 0;
let eligibleForMint = false;

window.onload = async () => {
	// Init Web3 connected to ETH network
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		window.web3.eth.defaultChain = defaultChain;
	} else {
		alert("No ETH brower extension detected.");
	}
};

window.ethereum.on("accountsChanged", async (accounts) => {
	if (!(await checkChain())) {
		return;
	}
	if (accounts.length !== 0) {
		window.userAddress = accounts[0];
		await showAddress();
	}
});

window.ethereum.on("chainChanged", (_chainId) => window.location.reload());

// Use this function to turn a 42 character ETH address
// into an address like 0x345...12345
function truncateAddress(address) {
	if (!address) {
		return "";
	}
	return `${address.substr(0, 5)}...${address.substr(
		address.length - 5,
		address.length
	)}`;
}

// Display or remove the users know address on the frontend
async function showAddress() {
	if (!window.userAddress) {
		document.getElementById("connectButton").innerHTML = "";
		document.getElementById("mint").innerHTML = "Mint not active";
		document.getElementById("mint").classList.add("hidden");
		document.getElementById("mintText").innerHTML = "0 / 0";
		document.getElementById("mintText").classList.add("hidden");
		return false;
	}

	document.getElementById("connectButton").innerHTML = `${truncateAddress(
		window.userAddress
	)}`;
	document.getElementById("mint").classList.remove("hidden");
	document.getElementById("mintText").classList.remove("hidden");

	const contract = new window.web3.eth.Contract(
		SNOWMEN_ABI,
		SNOWMEN_CONTRACT_ADDRESS
	);
	const pileContract = new window.web3.eth.Contract(
		PILE_ABI,
		PILE_CONTRACT_ADDRESS
	);
	//console.log(contract);
	totalSupply = await contract.methods
		.totalSupply()
		.call({ from: window.userAddress });
	totalBurned = await contract.methods
		.totalBurned()
		.call({ from: window.userAddress });
	totalSupply = parseInt(totalSupply) + parseInt(totalBurned);
	maxSupply = await contract.methods
		.maxSupply()
		.call({ from: window.userAddress });
	maxSupply = parseInt(maxSupply);

	payableAmount = await contract.methods
		.getPayableAmount(window.userAddress)
		.call({ from: window.userAddress });

	minTokenNeeded = await contract.methods
		.minTokenNeeded()
		.call({ from: window.userAddress });

    tokensNeeded = await contract.methods
		.tokensNeeded()
		.call({ from: window.userAddress });

	isApprovedForSpending = await pileContract.methods
		.isApprovedForAll(window.userAddress, SNOWMEN_CONTRACT_ADDRESS)
		.call({ from: window.userAddress });

	totalOwned = await pileContract.methods
		.balanceOf(window.userAddress)
		.call({ from: window.userAddress });

	eligibleForMint = totalOwned >= minTokenNeeded;

    maxBurn = (totalOwned >= tokensNeeded ? tokensNeeded : totalOwned);
    burnQty = (maxBurn >= minTokenNeeded ? maxBurn : minTokenNeeded);
    priceEth = (payableAmount == 0 ? "free" : ` ${(payableAmount/1000000000000000000)} ETH`);
    
	document.getElementById("mintText").innerHTML =
		totalSupply + " / " + maxSupply;
	if (maxSupply <= totalSupply) {
		document.getElementById("mint").innerHTML = "Sold out!";
	} else if (mintOpen && !eligibleForMint) {
		if (minTokenNeeded > 1) {
			document.getElementById(
				"mint"
			).innerHTML = `You don't have ${minTokenNeeded} piles! Click to buy!`;
		} else {
			document.getElementById(
				"mint"
			).innerHTML = `You don't have piles! Click to buy!`;
		}
	} else if (mintOpen && !isApprovedForSpending) {
		if (approveInProgress) {
			document.getElementById("mint").innerHTML = "Approving...";
		} else {
			document.getElementById("mint").innerHTML =
				"Approve piles for melting";
		}
	} else if (mintOpen) {
		if (mintInProgress) {
			document.getElementById("mint").innerHTML = "Minting...";
		} else {
			document.getElementById(
				"mint"
			).innerHTML = `Mint for ${priceEth} by burning ${burnQty} piles`;
		}
	}
}

// Login with Web3 via Metamasks window.ethereum library
async function loginWithEth() {
	if (window.web3) {
		try {
			if (!(await checkChain())) {
				return;
			}
			// We use this since ethereum.enable() is deprecated. This method is not
			// available in Web3JS - so we call it directly from metamasks' library
			const selectedAccount = await window.ethereum
				.request({
					method: "eth_requestAccounts",
				})
				.then((accounts) => accounts[0])
				.catch(() => {
					throw Error("No account selected!");
				});
			window.userAddress = selectedAccount;
			await showAddress();
		} catch (error) {
			console.error(error);
		}
	} else {
		alert("No ETH brower extension detected.");
	}
}

async function mint() {
	if (!window.userAddress) {
		return;
	}
	if (!(await checkChain())) {
		return;
	}
	if (!mintOpen) {
		return;
	}
	if (!eligibleForMint) {
		window.open("https://opensea.io/collection/apileofsnow", "_blank");
		return;
	}
	const contract = new window.web3.eth.Contract(
		SNOWMEN_ABI,
		SNOWMEN_CONTRACT_ADDRESS
	);
	const pileContract = new window.web3.eth.Contract(
		PILE_ABI,
		PILE_CONTRACT_ADDRESS
	);
	if (!isApprovedForSpending) {
		if (approveInProgress) {
			return;
		}
		pileContract.methods
			.setApprovalForAll(SNOWMEN_CONTRACT_ADDRESS, true)
			.send({ from: window.userAddress }, function (error, hash) {
				if (!error) {
					console.log("Transaction sent!", hash);
					document.getElementById("mint").innerHTML = "Approving...";
					approveInProgress = true;
					const interval = setInterval(function () {
						console.log("Attempting to get transaction receipt...");
						web3.eth.getTransactionReceipt(
							hash,
							function (err, rec) {
								if (rec) {
									document.getElementById("mint").innerHTML =
										"Approved!";
									clearInterval(interval);
									setTimeout(function () {
										approveInProgress = false;
										showAddress();
									}, 2000);
								}
							}
						);
					}, 1000);
				} else {
					approveInProgress = false;
					showAddress();
					console.log(
						"Something went wrong while submitting your transaction:",
						error
					);
				}
			});
	} else if (mintOpen) {
		if (mintInProgress) {
			return;
		}
		contract.methods
			.mint()
			.send({ value: payableAmount, from: window.userAddress }, function (error, hash) {
				if (!error) {
					console.log("Transaction sent!", hash);
					mintInProgress = true;
					document.getElementById("mint").innerHTML = "Minting...";
					const interval = setInterval(function () {
						console.log("Attempting to get transaction receipt...");
						web3.eth.getTransactionReceipt(
							hash,
							function (err, rec) {
								if (rec) {
									document.getElementById("mint").innerHTML =
										"Minted!";
									clearInterval(interval);
									setTimeout(function () {
										mintInProgress = false;
										showAddress();
									}, 2000);
								}
							}
						);
					}, 1000);
				} else {
					mintInProgress = false;
					showAddress();
					console.log(
						"Something went wrong while submitting your transaction:",
						error
					);
				}
			});
	}
}

async function checkChain() {
	chainOK = true;
	chainID = await window.web3.eth.net.getId();
	chainOK = chainID == defaultChainId;
	setErrorText(!chainOK, "Change network to " + defaultChainName);

	return chainOK;
}

function setErrorText(isError, errorText) {
	if (isError) {
		document.getElementById("errorText").innerHTML = errorText;
	} else {
		document.getElementById("errorText").innerHTML = "&nbsp;";
	}
}
