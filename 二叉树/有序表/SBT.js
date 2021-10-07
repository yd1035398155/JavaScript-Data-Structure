/* 
	Size Balanced Tree
 	任何一个叔叔节点的节点个数,不小于侄子节点的节点个数,如
	b整颗树的节点个数>= max(g,h)子树的节点个数

平衡性失效:
LL:左孩子的左孩子的节点个数(e),比叔叔节点个数多(c)
m(cur){
	 1)先右旋,谁的子节点变化了,对谁递归
	 2)m(cur.left);(cur.left=a)
	 3)m(cur)  (cur = b)
}
							a
						/	  \
				  b      c
		 	 	 / \     / \
				e   f   g   h

							b
						/	  \
					 e      a
			 	         / \
				        f   c
                   / \ 
                   g  h

LR:左孩子的右孩子的节点个数(f),比叔叔节点个数多(c)
m(cur){
	 1)先对cur.left左旋
	 2)在对cur右旋,谁的子节点变化了,对谁递归
	 3)m(cur.left);  cur.left=b
	 4)m(cur.right)  cur.right=a
	 5)m(cur)        cur = f
}
							a
						/	  \
				   b     c
		 	 	  / \   / \
			   e   f  g  h
             |			 
             x

				 			a
						/	  \
				   f     c
		 	 	  / \   / \
			   b   x  g  h
        /
			 e

			 			 	f
						/	  \
				   b     a
		 	 	  /     / \
			   e     x   c
                  / \
			           g   h
*/
