# 论文阅读 Analyzing Feed-Forward Blocks in Transformers Through Lens of Attention Map 放弃

# 相关信息

## 作者

　　`&lt;img src=&#34;static/posts/论文阅读/论文阅读_Analyzing_Feed-Forward_Blocks_in_Transformers_Through_Lens_of_Attention_Map_放弃/image-20240204132614-5m4ty3b.webp&#34; width=&#34;auto&#34; height=&#34;auto&#34;&gt;`

## 相关链接

# 一句话总结

　　这是一篇分析语言模型的 Transforemr 内部结构，特别是 FFN 的影响的文章。提出了一种新方法可视化特征图，只需要前向传播。

　　看不下去一点

# 摘要

　　 Transformer 很多人在用，因此解释其内部就很重要。FFN 的分析都没什么人做。作者通过可视化分析了 FFN 对上下文的影响。通过对 masked-language models 和 causal-language models 的分析，发现了 FFN 强调了特定类型的语言组合。此外，FFN 和周围的模块通常会抵消彼此的影响，这说明 Transforemr 层中存在潜在的冗余

# 动机（介绍和相关工作）

## 跳过背景介绍部分

## 作者是怎么做的

　　作者提出了一种基于范数的方法用于分析 FFN 对特征图的影响。该方法有几个优点

* 不需要反向传播，只需要前向传播
* 对语言模型的研究发现了 FFN 的上下文效应（contextualization effects）。具体来说发现了特定层中的 FFN 和归一化往往在很大程度上控制着上下文；观察到了典型的 FFN 效应，独立于语言模型；发现 FFN 的影响会被周围的残差层和归一化层削弱，这说明 Transformer 内部存在冗余

# 方法

# 实验

# 结论


---

> 作者:   
> URL: /%E8%AE%BA%E6%96%87%E9%98%85%E8%AF%BB-analyzing-feed-forward-blocks-in-transformers-through-lens-of-attention-map-%E6%94%BE%E5%BC%83/  

