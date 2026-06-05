import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Cart_Variant
 *
 */
export type Cart_VariantModel = runtime.Types.Result.DefaultSelection<Prisma.$Cart_VariantPayload>;
export type AggregateCart_Variant = {
    _count: Cart_VariantCountAggregateOutputType | null;
    _avg: Cart_VariantAvgAggregateOutputType | null;
    _sum: Cart_VariantSumAggregateOutputType | null;
    _min: Cart_VariantMinAggregateOutputType | null;
    _max: Cart_VariantMaxAggregateOutputType | null;
};
export type Cart_VariantAvgAggregateOutputType = {
    quantity: number | null;
};
export type Cart_VariantSumAggregateOutputType = {
    quantity: number | null;
};
export type Cart_VariantMinAggregateOutputType = {
    id: string | null;
    variantId: string | null;
    cartId: string | null;
    quantity: number | null;
};
export type Cart_VariantMaxAggregateOutputType = {
    id: string | null;
    variantId: string | null;
    cartId: string | null;
    quantity: number | null;
};
export type Cart_VariantCountAggregateOutputType = {
    id: number;
    variantId: number;
    cartId: number;
    quantity: number;
    _all: number;
};
export type Cart_VariantAvgAggregateInputType = {
    quantity?: true;
};
export type Cart_VariantSumAggregateInputType = {
    quantity?: true;
};
export type Cart_VariantMinAggregateInputType = {
    id?: true;
    variantId?: true;
    cartId?: true;
    quantity?: true;
};
export type Cart_VariantMaxAggregateInputType = {
    id?: true;
    variantId?: true;
    cartId?: true;
    quantity?: true;
};
export type Cart_VariantCountAggregateInputType = {
    id?: true;
    variantId?: true;
    cartId?: true;
    quantity?: true;
    _all?: true;
};
export type Cart_VariantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cart_Variant to aggregate.
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cart_Variants to fetch.
     */
    orderBy?: Prisma.Cart_VariantOrderByWithRelationInput | Prisma.Cart_VariantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Cart_VariantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cart_Variants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cart_Variants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cart_Variants
    **/
    _count?: true | Cart_VariantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Cart_VariantAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Cart_VariantSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Cart_VariantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Cart_VariantMaxAggregateInputType;
};
export type GetCart_VariantAggregateType<T extends Cart_VariantAggregateArgs> = {
    [P in keyof T & keyof AggregateCart_Variant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCart_Variant[P]> : Prisma.GetScalarType<T[P], AggregateCart_Variant[P]>;
};
export type Cart_VariantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Cart_VariantWhereInput;
    orderBy?: Prisma.Cart_VariantOrderByWithAggregationInput | Prisma.Cart_VariantOrderByWithAggregationInput[];
    by: Prisma.Cart_VariantScalarFieldEnum[] | Prisma.Cart_VariantScalarFieldEnum;
    having?: Prisma.Cart_VariantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cart_VariantCountAggregateInputType | true;
    _avg?: Cart_VariantAvgAggregateInputType;
    _sum?: Cart_VariantSumAggregateInputType;
    _min?: Cart_VariantMinAggregateInputType;
    _max?: Cart_VariantMaxAggregateInputType;
};
export type Cart_VariantGroupByOutputType = {
    id: string;
    variantId: string;
    cartId: string;
    quantity: number;
    _count: Cart_VariantCountAggregateOutputType | null;
    _avg: Cart_VariantAvgAggregateOutputType | null;
    _sum: Cart_VariantSumAggregateOutputType | null;
    _min: Cart_VariantMinAggregateOutputType | null;
    _max: Cart_VariantMaxAggregateOutputType | null;
};
export type GetCart_VariantGroupByPayload<T extends Cart_VariantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Cart_VariantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Cart_VariantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Cart_VariantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Cart_VariantGroupByOutputType[P]>;
}>>;
export type Cart_VariantWhereInput = {
    AND?: Prisma.Cart_VariantWhereInput | Prisma.Cart_VariantWhereInput[];
    OR?: Prisma.Cart_VariantWhereInput[];
    NOT?: Prisma.Cart_VariantWhereInput | Prisma.Cart_VariantWhereInput[];
    id?: Prisma.StringFilter<"Cart_Variant"> | string;
    variantId?: Prisma.StringFilter<"Cart_Variant"> | string;
    cartId?: Prisma.StringFilter<"Cart_Variant"> | string;
    quantity?: Prisma.IntFilter<"Cart_Variant"> | number;
    variant?: Prisma.XOR<Prisma.VariantScalarRelationFilter, Prisma.VariantWhereInput>;
    cart?: Prisma.XOR<Prisma.CartScalarRelationFilter, Prisma.CartWhereInput>;
};
export type Cart_VariantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    cartId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    variant?: Prisma.VariantOrderByWithRelationInput;
    cart?: Prisma.CartOrderByWithRelationInput;
};
export type Cart_VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.Cart_VariantWhereInput | Prisma.Cart_VariantWhereInput[];
    OR?: Prisma.Cart_VariantWhereInput[];
    NOT?: Prisma.Cart_VariantWhereInput | Prisma.Cart_VariantWhereInput[];
    variantId?: Prisma.StringFilter<"Cart_Variant"> | string;
    cartId?: Prisma.StringFilter<"Cart_Variant"> | string;
    quantity?: Prisma.IntFilter<"Cart_Variant"> | number;
    variant?: Prisma.XOR<Prisma.VariantScalarRelationFilter, Prisma.VariantWhereInput>;
    cart?: Prisma.XOR<Prisma.CartScalarRelationFilter, Prisma.CartWhereInput>;
}, "id">;
export type Cart_VariantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    cartId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    _count?: Prisma.Cart_VariantCountOrderByAggregateInput;
    _avg?: Prisma.Cart_VariantAvgOrderByAggregateInput;
    _max?: Prisma.Cart_VariantMaxOrderByAggregateInput;
    _min?: Prisma.Cart_VariantMinOrderByAggregateInput;
    _sum?: Prisma.Cart_VariantSumOrderByAggregateInput;
};
export type Cart_VariantScalarWhereWithAggregatesInput = {
    AND?: Prisma.Cart_VariantScalarWhereWithAggregatesInput | Prisma.Cart_VariantScalarWhereWithAggregatesInput[];
    OR?: Prisma.Cart_VariantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Cart_VariantScalarWhereWithAggregatesInput | Prisma.Cart_VariantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cart_Variant"> | string;
    variantId?: Prisma.StringWithAggregatesFilter<"Cart_Variant"> | string;
    cartId?: Prisma.StringWithAggregatesFilter<"Cart_Variant"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Cart_Variant"> | number;
};
export type Cart_VariantCreateInput = {
    id?: string;
    quantity: number;
    variant: Prisma.VariantCreateNestedOneWithoutCartInput;
    cart: Prisma.CartCreateNestedOneWithoutCart_VariantInput;
};
export type Cart_VariantUncheckedCreateInput = {
    id?: string;
    variantId: string;
    cartId: string;
    quantity: number;
};
export type Cart_VariantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    variant?: Prisma.VariantUpdateOneRequiredWithoutCartNestedInput;
    cart?: Prisma.CartUpdateOneRequiredWithoutCart_VariantNestedInput;
};
export type Cart_VariantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    variantId?: Prisma.StringFieldUpdateOperationsInput | string;
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantCreateManyInput = {
    id?: string;
    variantId: string;
    cartId: string;
    quantity: number;
};
export type Cart_VariantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    variantId?: Prisma.StringFieldUpdateOperationsInput | string;
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantListRelationFilter = {
    every?: Prisma.Cart_VariantWhereInput;
    some?: Prisma.Cart_VariantWhereInput;
    none?: Prisma.Cart_VariantWhereInput;
};
export type Cart_VariantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Cart_VariantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    cartId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Cart_VariantAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type Cart_VariantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    cartId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Cart_VariantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    cartId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type Cart_VariantSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type Cart_VariantCreateNestedManyWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutVariantInput, Prisma.Cart_VariantUncheckedCreateWithoutVariantInput> | Prisma.Cart_VariantCreateWithoutVariantInput[] | Prisma.Cart_VariantUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutVariantInput | Prisma.Cart_VariantCreateOrConnectWithoutVariantInput[];
    createMany?: Prisma.Cart_VariantCreateManyVariantInputEnvelope;
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
};
export type Cart_VariantUncheckedCreateNestedManyWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutVariantInput, Prisma.Cart_VariantUncheckedCreateWithoutVariantInput> | Prisma.Cart_VariantCreateWithoutVariantInput[] | Prisma.Cart_VariantUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutVariantInput | Prisma.Cart_VariantCreateOrConnectWithoutVariantInput[];
    createMany?: Prisma.Cart_VariantCreateManyVariantInputEnvelope;
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
};
export type Cart_VariantUpdateManyWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutVariantInput, Prisma.Cart_VariantUncheckedCreateWithoutVariantInput> | Prisma.Cart_VariantCreateWithoutVariantInput[] | Prisma.Cart_VariantUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutVariantInput | Prisma.Cart_VariantCreateOrConnectWithoutVariantInput[];
    upsert?: Prisma.Cart_VariantUpsertWithWhereUniqueWithoutVariantInput | Prisma.Cart_VariantUpsertWithWhereUniqueWithoutVariantInput[];
    createMany?: Prisma.Cart_VariantCreateManyVariantInputEnvelope;
    set?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    disconnect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    delete?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    update?: Prisma.Cart_VariantUpdateWithWhereUniqueWithoutVariantInput | Prisma.Cart_VariantUpdateWithWhereUniqueWithoutVariantInput[];
    updateMany?: Prisma.Cart_VariantUpdateManyWithWhereWithoutVariantInput | Prisma.Cart_VariantUpdateManyWithWhereWithoutVariantInput[];
    deleteMany?: Prisma.Cart_VariantScalarWhereInput | Prisma.Cart_VariantScalarWhereInput[];
};
export type Cart_VariantUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutVariantInput, Prisma.Cart_VariantUncheckedCreateWithoutVariantInput> | Prisma.Cart_VariantCreateWithoutVariantInput[] | Prisma.Cart_VariantUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutVariantInput | Prisma.Cart_VariantCreateOrConnectWithoutVariantInput[];
    upsert?: Prisma.Cart_VariantUpsertWithWhereUniqueWithoutVariantInput | Prisma.Cart_VariantUpsertWithWhereUniqueWithoutVariantInput[];
    createMany?: Prisma.Cart_VariantCreateManyVariantInputEnvelope;
    set?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    disconnect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    delete?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    update?: Prisma.Cart_VariantUpdateWithWhereUniqueWithoutVariantInput | Prisma.Cart_VariantUpdateWithWhereUniqueWithoutVariantInput[];
    updateMany?: Prisma.Cart_VariantUpdateManyWithWhereWithoutVariantInput | Prisma.Cart_VariantUpdateManyWithWhereWithoutVariantInput[];
    deleteMany?: Prisma.Cart_VariantScalarWhereInput | Prisma.Cart_VariantScalarWhereInput[];
};
export type Cart_VariantCreateNestedManyWithoutCartInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutCartInput, Prisma.Cart_VariantUncheckedCreateWithoutCartInput> | Prisma.Cart_VariantCreateWithoutCartInput[] | Prisma.Cart_VariantUncheckedCreateWithoutCartInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutCartInput | Prisma.Cart_VariantCreateOrConnectWithoutCartInput[];
    createMany?: Prisma.Cart_VariantCreateManyCartInputEnvelope;
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
};
export type Cart_VariantUncheckedCreateNestedManyWithoutCartInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutCartInput, Prisma.Cart_VariantUncheckedCreateWithoutCartInput> | Prisma.Cart_VariantCreateWithoutCartInput[] | Prisma.Cart_VariantUncheckedCreateWithoutCartInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutCartInput | Prisma.Cart_VariantCreateOrConnectWithoutCartInput[];
    createMany?: Prisma.Cart_VariantCreateManyCartInputEnvelope;
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
};
export type Cart_VariantUpdateManyWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutCartInput, Prisma.Cart_VariantUncheckedCreateWithoutCartInput> | Prisma.Cart_VariantCreateWithoutCartInput[] | Prisma.Cart_VariantUncheckedCreateWithoutCartInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutCartInput | Prisma.Cart_VariantCreateOrConnectWithoutCartInput[];
    upsert?: Prisma.Cart_VariantUpsertWithWhereUniqueWithoutCartInput | Prisma.Cart_VariantUpsertWithWhereUniqueWithoutCartInput[];
    createMany?: Prisma.Cart_VariantCreateManyCartInputEnvelope;
    set?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    disconnect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    delete?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    update?: Prisma.Cart_VariantUpdateWithWhereUniqueWithoutCartInput | Prisma.Cart_VariantUpdateWithWhereUniqueWithoutCartInput[];
    updateMany?: Prisma.Cart_VariantUpdateManyWithWhereWithoutCartInput | Prisma.Cart_VariantUpdateManyWithWhereWithoutCartInput[];
    deleteMany?: Prisma.Cart_VariantScalarWhereInput | Prisma.Cart_VariantScalarWhereInput[];
};
export type Cart_VariantUncheckedUpdateManyWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.Cart_VariantCreateWithoutCartInput, Prisma.Cart_VariantUncheckedCreateWithoutCartInput> | Prisma.Cart_VariantCreateWithoutCartInput[] | Prisma.Cart_VariantUncheckedCreateWithoutCartInput[];
    connectOrCreate?: Prisma.Cart_VariantCreateOrConnectWithoutCartInput | Prisma.Cart_VariantCreateOrConnectWithoutCartInput[];
    upsert?: Prisma.Cart_VariantUpsertWithWhereUniqueWithoutCartInput | Prisma.Cart_VariantUpsertWithWhereUniqueWithoutCartInput[];
    createMany?: Prisma.Cart_VariantCreateManyCartInputEnvelope;
    set?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    disconnect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    delete?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    connect?: Prisma.Cart_VariantWhereUniqueInput | Prisma.Cart_VariantWhereUniqueInput[];
    update?: Prisma.Cart_VariantUpdateWithWhereUniqueWithoutCartInput | Prisma.Cart_VariantUpdateWithWhereUniqueWithoutCartInput[];
    updateMany?: Prisma.Cart_VariantUpdateManyWithWhereWithoutCartInput | Prisma.Cart_VariantUpdateManyWithWhereWithoutCartInput[];
    deleteMany?: Prisma.Cart_VariantScalarWhereInput | Prisma.Cart_VariantScalarWhereInput[];
};
export type Cart_VariantCreateWithoutVariantInput = {
    id?: string;
    quantity: number;
    cart: Prisma.CartCreateNestedOneWithoutCart_VariantInput;
};
export type Cart_VariantUncheckedCreateWithoutVariantInput = {
    id?: string;
    cartId: string;
    quantity: number;
};
export type Cart_VariantCreateOrConnectWithoutVariantInput = {
    where: Prisma.Cart_VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.Cart_VariantCreateWithoutVariantInput, Prisma.Cart_VariantUncheckedCreateWithoutVariantInput>;
};
export type Cart_VariantCreateManyVariantInputEnvelope = {
    data: Prisma.Cart_VariantCreateManyVariantInput | Prisma.Cart_VariantCreateManyVariantInput[];
    skipDuplicates?: boolean;
};
export type Cart_VariantUpsertWithWhereUniqueWithoutVariantInput = {
    where: Prisma.Cart_VariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.Cart_VariantUpdateWithoutVariantInput, Prisma.Cart_VariantUncheckedUpdateWithoutVariantInput>;
    create: Prisma.XOR<Prisma.Cart_VariantCreateWithoutVariantInput, Prisma.Cart_VariantUncheckedCreateWithoutVariantInput>;
};
export type Cart_VariantUpdateWithWhereUniqueWithoutVariantInput = {
    where: Prisma.Cart_VariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.Cart_VariantUpdateWithoutVariantInput, Prisma.Cart_VariantUncheckedUpdateWithoutVariantInput>;
};
export type Cart_VariantUpdateManyWithWhereWithoutVariantInput = {
    where: Prisma.Cart_VariantScalarWhereInput;
    data: Prisma.XOR<Prisma.Cart_VariantUpdateManyMutationInput, Prisma.Cart_VariantUncheckedUpdateManyWithoutVariantInput>;
};
export type Cart_VariantScalarWhereInput = {
    AND?: Prisma.Cart_VariantScalarWhereInput | Prisma.Cart_VariantScalarWhereInput[];
    OR?: Prisma.Cart_VariantScalarWhereInput[];
    NOT?: Prisma.Cart_VariantScalarWhereInput | Prisma.Cart_VariantScalarWhereInput[];
    id?: Prisma.StringFilter<"Cart_Variant"> | string;
    variantId?: Prisma.StringFilter<"Cart_Variant"> | string;
    cartId?: Prisma.StringFilter<"Cart_Variant"> | string;
    quantity?: Prisma.IntFilter<"Cart_Variant"> | number;
};
export type Cart_VariantCreateWithoutCartInput = {
    id?: string;
    quantity: number;
    variant: Prisma.VariantCreateNestedOneWithoutCartInput;
};
export type Cart_VariantUncheckedCreateWithoutCartInput = {
    id?: string;
    variantId: string;
    quantity: number;
};
export type Cart_VariantCreateOrConnectWithoutCartInput = {
    where: Prisma.Cart_VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.Cart_VariantCreateWithoutCartInput, Prisma.Cart_VariantUncheckedCreateWithoutCartInput>;
};
export type Cart_VariantCreateManyCartInputEnvelope = {
    data: Prisma.Cart_VariantCreateManyCartInput | Prisma.Cart_VariantCreateManyCartInput[];
    skipDuplicates?: boolean;
};
export type Cart_VariantUpsertWithWhereUniqueWithoutCartInput = {
    where: Prisma.Cart_VariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.Cart_VariantUpdateWithoutCartInput, Prisma.Cart_VariantUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.Cart_VariantCreateWithoutCartInput, Prisma.Cart_VariantUncheckedCreateWithoutCartInput>;
};
export type Cart_VariantUpdateWithWhereUniqueWithoutCartInput = {
    where: Prisma.Cart_VariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.Cart_VariantUpdateWithoutCartInput, Prisma.Cart_VariantUncheckedUpdateWithoutCartInput>;
};
export type Cart_VariantUpdateManyWithWhereWithoutCartInput = {
    where: Prisma.Cart_VariantScalarWhereInput;
    data: Prisma.XOR<Prisma.Cart_VariantUpdateManyMutationInput, Prisma.Cart_VariantUncheckedUpdateManyWithoutCartInput>;
};
export type Cart_VariantCreateManyVariantInput = {
    id?: string;
    cartId: string;
    quantity: number;
};
export type Cart_VariantUpdateWithoutVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    cart?: Prisma.CartUpdateOneRequiredWithoutCart_VariantNestedInput;
};
export type Cart_VariantUncheckedUpdateWithoutVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantUncheckedUpdateManyWithoutVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cartId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantCreateManyCartInput = {
    id?: string;
    variantId: string;
    quantity: number;
};
export type Cart_VariantUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    variant?: Prisma.VariantUpdateOneRequiredWithoutCartNestedInput;
};
export type Cart_VariantUncheckedUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    variantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantUncheckedUpdateManyWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    variantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Cart_VariantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    cartId?: boolean;
    quantity?: boolean;
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.CartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_Variant"]>;
export type Cart_VariantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    cartId?: boolean;
    quantity?: boolean;
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.CartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_Variant"]>;
export type Cart_VariantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    cartId?: boolean;
    quantity?: boolean;
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.CartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cart_Variant"]>;
export type Cart_VariantSelectScalar = {
    id?: boolean;
    variantId?: boolean;
    cartId?: boolean;
    quantity?: boolean;
};
export type Cart_VariantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "variantId" | "cartId" | "quantity", ExtArgs["result"]["cart_Variant"]>;
export type Cart_VariantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.CartDefaultArgs<ExtArgs>;
};
export type Cart_VariantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.CartDefaultArgs<ExtArgs>;
};
export type Cart_VariantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    cart?: boolean | Prisma.CartDefaultArgs<ExtArgs>;
};
export type $Cart_VariantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cart_Variant";
    objects: {
        variant: Prisma.$VariantPayload<ExtArgs>;
        cart: Prisma.$CartPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        variantId: string;
        cartId: string;
        quantity: number;
    }, ExtArgs["result"]["cart_Variant"]>;
    composites: {};
};
export type Cart_VariantGetPayload<S extends boolean | null | undefined | Cart_VariantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload, S>;
export type Cart_VariantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Cart_VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Cart_VariantCountAggregateInputType | true;
};
export interface Cart_VariantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cart_Variant'];
        meta: {
            name: 'Cart_Variant';
        };
    };
    /**
     * Find zero or one Cart_Variant that matches the filter.
     * @param {Cart_VariantFindUniqueArgs} args - Arguments to find a Cart_Variant
     * @example
     * // Get one Cart_Variant
     * const cart_Variant = await prisma.cart_Variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Cart_VariantFindUniqueArgs>(args: Prisma.SelectSubset<T, Cart_VariantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cart_Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Cart_VariantFindUniqueOrThrowArgs} args - Arguments to find a Cart_Variant
     * @example
     * // Get one Cart_Variant
     * const cart_Variant = await prisma.cart_Variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Cart_VariantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Cart_VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cart_Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantFindFirstArgs} args - Arguments to find a Cart_Variant
     * @example
     * // Get one Cart_Variant
     * const cart_Variant = await prisma.cart_Variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Cart_VariantFindFirstArgs>(args?: Prisma.SelectSubset<T, Cart_VariantFindFirstArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cart_Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantFindFirstOrThrowArgs} args - Arguments to find a Cart_Variant
     * @example
     * // Get one Cart_Variant
     * const cart_Variant = await prisma.cart_Variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Cart_VariantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Cart_VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cart_Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_Variants
     * const cart_Variants = await prisma.cart_Variant.findMany()
     *
     * // Get first 10 Cart_Variants
     * const cart_Variants = await prisma.cart_Variant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cart_VariantWithIdOnly = await prisma.cart_Variant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends Cart_VariantFindManyArgs>(args?: Prisma.SelectSubset<T, Cart_VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cart_Variant.
     * @param {Cart_VariantCreateArgs} args - Arguments to create a Cart_Variant.
     * @example
     * // Create one Cart_Variant
     * const Cart_Variant = await prisma.cart_Variant.create({
     *   data: {
     *     // ... data to create a Cart_Variant
     *   }
     * })
     *
     */
    create<T extends Cart_VariantCreateArgs>(args: Prisma.SelectSubset<T, Cart_VariantCreateArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cart_Variants.
     * @param {Cart_VariantCreateManyArgs} args - Arguments to create many Cart_Variants.
     * @example
     * // Create many Cart_Variants
     * const cart_Variant = await prisma.cart_Variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Cart_VariantCreateManyArgs>(args?: Prisma.SelectSubset<T, Cart_VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Cart_Variants and returns the data saved in the database.
     * @param {Cart_VariantCreateManyAndReturnArgs} args - Arguments to create many Cart_Variants.
     * @example
     * // Create many Cart_Variants
     * const cart_Variant = await prisma.cart_Variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cart_Variants and only return the `id`
     * const cart_VariantWithIdOnly = await prisma.cart_Variant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends Cart_VariantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Cart_VariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Cart_Variant.
     * @param {Cart_VariantDeleteArgs} args - Arguments to delete one Cart_Variant.
     * @example
     * // Delete one Cart_Variant
     * const Cart_Variant = await prisma.cart_Variant.delete({
     *   where: {
     *     // ... filter to delete one Cart_Variant
     *   }
     * })
     *
     */
    delete<T extends Cart_VariantDeleteArgs>(args: Prisma.SelectSubset<T, Cart_VariantDeleteArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cart_Variant.
     * @param {Cart_VariantUpdateArgs} args - Arguments to update one Cart_Variant.
     * @example
     * // Update one Cart_Variant
     * const cart_Variant = await prisma.cart_Variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Cart_VariantUpdateArgs>(args: Prisma.SelectSubset<T, Cart_VariantUpdateArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cart_Variants.
     * @param {Cart_VariantDeleteManyArgs} args - Arguments to filter Cart_Variants to delete.
     * @example
     * // Delete a few Cart_Variants
     * const { count } = await prisma.cart_Variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Cart_VariantDeleteManyArgs>(args?: Prisma.SelectSubset<T, Cart_VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cart_Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_Variants
     * const cart_Variant = await prisma.cart_Variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Cart_VariantUpdateManyArgs>(args: Prisma.SelectSubset<T, Cart_VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cart_Variants and returns the data updated in the database.
     * @param {Cart_VariantUpdateManyAndReturnArgs} args - Arguments to update many Cart_Variants.
     * @example
     * // Update many Cart_Variants
     * const cart_Variant = await prisma.cart_Variant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cart_Variants and only return the `id`
     * const cart_VariantWithIdOnly = await prisma.cart_Variant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends Cart_VariantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Cart_VariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Cart_Variant.
     * @param {Cart_VariantUpsertArgs} args - Arguments to update or create a Cart_Variant.
     * @example
     * // Update or create a Cart_Variant
     * const cart_Variant = await prisma.cart_Variant.upsert({
     *   create: {
     *     // ... data to create a Cart_Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_Variant we want to update
     *   }
     * })
     */
    upsert<T extends Cart_VariantUpsertArgs>(args: Prisma.SelectSubset<T, Cart_VariantUpsertArgs<ExtArgs>>): Prisma.Prisma__Cart_VariantClient<runtime.Types.Result.GetResult<Prisma.$Cart_VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cart_Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantCountArgs} args - Arguments to filter Cart_Variants to count.
     * @example
     * // Count the number of Cart_Variants
     * const count = await prisma.cart_Variant.count({
     *   where: {
     *     // ... the filter for the Cart_Variants we want to count
     *   }
     * })
    **/
    count<T extends Cart_VariantCountArgs>(args?: Prisma.Subset<T, Cart_VariantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Cart_VariantCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cart_Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_VariantAggregateArgs>(args: Prisma.Subset<T, Cart_VariantAggregateArgs>): Prisma.PrismaPromise<GetCart_VariantAggregateType<T>>;
    /**
     * Group by Cart_Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_VariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends Cart_VariantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Cart_VariantGroupByArgs['orderBy'];
    } : {
        orderBy?: Cart_VariantGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Cart_VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_VariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cart_Variant model
     */
    readonly fields: Cart_VariantFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Cart_Variant.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Cart_VariantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    variant<T extends Prisma.VariantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VariantDefaultArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cart<T extends Prisma.CartDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CartDefaultArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Cart_Variant model
 */
export interface Cart_VariantFieldRefs {
    readonly id: Prisma.FieldRef<"Cart_Variant", 'String'>;
    readonly variantId: Prisma.FieldRef<"Cart_Variant", 'String'>;
    readonly cartId: Prisma.FieldRef<"Cart_Variant", 'String'>;
    readonly quantity: Prisma.FieldRef<"Cart_Variant", 'Int'>;
}
/**
 * Cart_Variant findUnique
 */
export type Cart_VariantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * Filter, which Cart_Variant to fetch.
     */
    where: Prisma.Cart_VariantWhereUniqueInput;
};
/**
 * Cart_Variant findUniqueOrThrow
 */
export type Cart_VariantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * Filter, which Cart_Variant to fetch.
     */
    where: Prisma.Cart_VariantWhereUniqueInput;
};
/**
 * Cart_Variant findFirst
 */
export type Cart_VariantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * Filter, which Cart_Variant to fetch.
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cart_Variants to fetch.
     */
    orderBy?: Prisma.Cart_VariantOrderByWithRelationInput | Prisma.Cart_VariantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cart_Variants.
     */
    cursor?: Prisma.Cart_VariantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cart_Variants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cart_Variants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cart_Variants.
     */
    distinct?: Prisma.Cart_VariantScalarFieldEnum | Prisma.Cart_VariantScalarFieldEnum[];
};
/**
 * Cart_Variant findFirstOrThrow
 */
export type Cart_VariantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * Filter, which Cart_Variant to fetch.
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cart_Variants to fetch.
     */
    orderBy?: Prisma.Cart_VariantOrderByWithRelationInput | Prisma.Cart_VariantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cart_Variants.
     */
    cursor?: Prisma.Cart_VariantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cart_Variants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cart_Variants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cart_Variants.
     */
    distinct?: Prisma.Cart_VariantScalarFieldEnum | Prisma.Cart_VariantScalarFieldEnum[];
};
/**
 * Cart_Variant findMany
 */
export type Cart_VariantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * Filter, which Cart_Variants to fetch.
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cart_Variants to fetch.
     */
    orderBy?: Prisma.Cart_VariantOrderByWithRelationInput | Prisma.Cart_VariantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cart_Variants.
     */
    cursor?: Prisma.Cart_VariantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cart_Variants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cart_Variants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cart_Variants.
     */
    distinct?: Prisma.Cart_VariantScalarFieldEnum | Prisma.Cart_VariantScalarFieldEnum[];
};
/**
 * Cart_Variant create
 */
export type Cart_VariantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Cart_Variant.
     */
    data: Prisma.XOR<Prisma.Cart_VariantCreateInput, Prisma.Cart_VariantUncheckedCreateInput>;
};
/**
 * Cart_Variant createMany
 */
export type Cart_VariantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cart_Variants.
     */
    data: Prisma.Cart_VariantCreateManyInput | Prisma.Cart_VariantCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Cart_Variant createManyAndReturn
 */
export type Cart_VariantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * The data used to create many Cart_Variants.
     */
    data: Prisma.Cart_VariantCreateManyInput | Prisma.Cart_VariantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Cart_Variant update
 */
export type Cart_VariantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Cart_Variant.
     */
    data: Prisma.XOR<Prisma.Cart_VariantUpdateInput, Prisma.Cart_VariantUncheckedUpdateInput>;
    /**
     * Choose, which Cart_Variant to update.
     */
    where: Prisma.Cart_VariantWhereUniqueInput;
};
/**
 * Cart_Variant updateMany
 */
export type Cart_VariantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Cart_Variants.
     */
    data: Prisma.XOR<Prisma.Cart_VariantUpdateManyMutationInput, Prisma.Cart_VariantUncheckedUpdateManyInput>;
    /**
     * Filter which Cart_Variants to update
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * Limit how many Cart_Variants to update.
     */
    limit?: number;
};
/**
 * Cart_Variant updateManyAndReturn
 */
export type Cart_VariantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * The data used to update Cart_Variants.
     */
    data: Prisma.XOR<Prisma.Cart_VariantUpdateManyMutationInput, Prisma.Cart_VariantUncheckedUpdateManyInput>;
    /**
     * Filter which Cart_Variants to update
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * Limit how many Cart_Variants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Cart_Variant upsert
 */
export type Cart_VariantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Cart_Variant to update in case it exists.
     */
    where: Prisma.Cart_VariantWhereUniqueInput;
    /**
     * In case the Cart_Variant found by the `where` argument doesn't exist, create a new Cart_Variant with this data.
     */
    create: Prisma.XOR<Prisma.Cart_VariantCreateInput, Prisma.Cart_VariantUncheckedCreateInput>;
    /**
     * In case the Cart_Variant was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Cart_VariantUpdateInput, Prisma.Cart_VariantUncheckedUpdateInput>;
};
/**
 * Cart_Variant delete
 */
export type Cart_VariantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
    /**
     * Filter which Cart_Variant to delete.
     */
    where: Prisma.Cart_VariantWhereUniqueInput;
};
/**
 * Cart_Variant deleteMany
 */
export type Cart_VariantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cart_Variants to delete
     */
    where?: Prisma.Cart_VariantWhereInput;
    /**
     * Limit how many Cart_Variants to delete.
     */
    limit?: number;
};
/**
 * Cart_Variant without action
 */
export type Cart_VariantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart_Variant
     */
    select?: Prisma.Cart_VariantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cart_Variant
     */
    omit?: Prisma.Cart_VariantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Cart_VariantInclude<ExtArgs> | null;
};
//# sourceMappingURL=Cart_Variant.d.ts.map